import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { StatusReportService } from '../status-report.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  
  role:any
  flag:boolean;
  constructor(private route:Router,private log:LoginService,private msg:StatusReportService) {
    this.flag=true;
   }

   changeFlag(state:boolean)
   {
     console.log("flag"+ this.flag)
    this.flag=state
   }
   logout()
   {
    this.log.changeState();
    this.msg.changeMessage("Logged Out Sucessfully")
    this.route.navigateByUrl('/login')
   }
   
  ngOnInit(): void {
    this.log.requestData().subscribe((data)=>
    this.role=data.role);
    
  }

}
