import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  Userobj:any
  flag:any
  constructor(private http: HttpClient ,private route:  Router) {
    this.Userobj={
      FirstName:"",
      LastName:"",
      userId:"",
      mobileNumber:undefined,
      email:"",
      role:"User"
    }
    this.flag={ret:false} 
   }
   sendData()
   {
    console.log(this.Userobj)
     this.http.post("http://localhost:8080/signup", this.Userobj ).subscribe(data=>this.flag=data)
     if(this.flag.ret)
        this.route.navigateByUrl('/login?status=success')
      else
        this.route.navigateByUrl('/login?status=fail')
   }

  ngOnInit(): void {
  
  }

}