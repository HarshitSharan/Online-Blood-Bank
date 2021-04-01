import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { StatusReportService } from '../status-report.service';
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  Userobj:any
  flag:any
  obj:any
  constructor(private http: HttpClient ,private route:  Router,private status:StatusReportService) {
    this.Userobj={
      FirstName:"",
      LastName:"",
      mobileNumber:undefined,
      email:"",
      active:false,
      password:'',
      role:"User"
    }
    this.flag=true
   }
   sendData()
   {
    console.log(this.Userobj)
    this.obj={
      "FirstName" : "fas",
      "LastName": "afsd",
      "active": false,
      "email": "afsd",
      "mobileNumber": 5635,
      "password": ""
      }
     this.http.post("http://localhost:8080/signup",this.obj).subscribe(data=>
     {this.flag=data
      console.log(data)})
     
     if(this.flag)
     {
      this.status.changeMessage("success")
        this.route.navigateByUrl('/login')

     }
      else
      {
        this.status.changeMessage("fail")
        this.route.navigateByUrl('/login')

      }
   }

  ngOnInit(): void {

  
  }

}
