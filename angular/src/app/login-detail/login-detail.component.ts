import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StatusReportService } from '../status-report.service';
import { LoginService } from '../login.service';
@Component({
  selector: 'login-detail',
  templateUrl: './login-detail.component.html',
  styleUrls: ['./login-detail.component.css']
})
export class LoginDetailComponent implements OnInit {
  loginObj:any;
  constructor(private http:HttpClient, private route:Router,private status:StatusReportService,private cred:LoginService) { 
    this.loginObj={
      email: '',
      password:''
    }
  }

  sendData()
  {
     this.http.post("http://localhost:8080/login", this.loginObj ).subscribe((data)=>
    {
      if(data)
      {
        
        this.cred.changeState(this.loginObj.email);
        this.cred.requestData(this.loginObj.email).subscribe(data=>
          {
            console.log(data.role,"yha")
            if(data.role=='User')
            {
              console.log("ysadkj")
              this.route.navigateByUrl('user/dashboard')
            }

            else
              this.route.navigateByUrl('admin/dashboard')
          })
      }
      else
      {
        this.status.changeMessage("logFail")
        this.route.navigateByUrl("/login")

      }
  })
  }
  ngOnInit(): void {
    


  }

}
