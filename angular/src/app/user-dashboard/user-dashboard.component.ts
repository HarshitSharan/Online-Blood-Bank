import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  

  flag:boolean;
  constructor(private route:Router,private log:LoginService) {
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
    this.route.navigateByUrl('/login')
   }
  ngOnInit(): void {
    
  }

}
