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
        this.cred.requestData(this.loginObj.email);
        this.cred.changeState(this.loginObj.email)
        console.log(this.cred.userData.role)
        if(this.cred.userData.role=='User')
        this.route.navigateByUrl('/donor')
        else
          this.route.navigateByUrl('/admin')
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
