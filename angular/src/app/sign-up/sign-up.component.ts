import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      firstName:"",
      fastName:"",
      mobileNumber:undefined,
      email:"",
      active:false,
      password:'',
      role:"User"
    }

   }
   sendData()
   {
    console.log(this.Userobj)

     this.http.post("http://localhost:8080/signup",this.Userobj).subscribe(data=>
     {
       
    
      if(data)
      {
        this.status.changeMessage("success")
          this.route.navigateByUrl('/login')

      }
      else
      {
          this.status.changeMessage("fail")
          this.route.navigateByUrl('/login')

      }
    })
  
  }
  ngOnInit(): void {

  
  }

}
