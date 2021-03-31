import { Component, OnChanges, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { StatusReportService } from '../status-report.service';
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  message:string;
  flag:string;
  constructor(private activatedRoute: ActivatedRoute,private status:StatusReportService) {
    this.message='';
    this.flag='';
   }

  ngOnInit(): void {
    //this.activatedRoute.queryParams.subscribe(data=>this.flag=data.status)
    this.status.Status.subscribe(t=>
    {this.flag=t
    console.log(this.flag);
    if(this.flag=='fail')
      this.message="Failed To Create the account"
    else if(this.flag=='success')
      this.message="Sucessfully Registered the account"
    else if(this.flag=='logFail')
      this.message="Incorrect Login Credential provided"
    else if(this.flag=='NA')
      this.message="Please Login to Continue "
    else 
      this.message=""
    })
  }

  

  
  
}
