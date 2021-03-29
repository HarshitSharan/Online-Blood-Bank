import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StatusReportService } from '../status-report.service';
@Component({
  selector: 'login-detail',
  templateUrl: './login-detail.component.html',
  styleUrls: ['./login-detail.component.css']
})
export class LoginDetailComponent implements OnInit {
  loginObj:any
  flag:any
  constructor(private http:HttpClient, private route:Router,private status:StatusReportService) { 
    this.loginObj={
      id: '',
      password:''
    }
    this.flag={ret:false}

  }

  sendData()
  {
    //this.http.post("http://localhost:8080/signup", this.loginObj ).subscribe(data=>this.flag=data)
    if(this.flag.ret)
      this.route.navigateByUrl("/dashboard")
    else
    {
      this.status.changeMessage("logFail")
      this.route.navigateByUrl("/login?status=logFail")

    }
  }
  ngOnInit(): void {
    


  }

}
