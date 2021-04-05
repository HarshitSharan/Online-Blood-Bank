import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Router} from '@angular/router'
import { GlobalConstants } from '../common/global';
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
  fl:boolean
  confirmPass:string;
  constructor(private http: HttpClient ,private route:  Router,private status:StatusReportService) {
    this.Userobj={
      firstName:"",
      fastName:"",
      mobileNumber:undefined,
      email:"",
      active:false,
      password:'',
      role:"User",

    }
    this.confirmPass=''
    this.fl=false;
   }
   sendData(flag:boolean)
   {
     //console.log(flag)
    //console.log(this.Userobj)
     if (flag)
     {
      
       this.fl=flag
       return
     }
    
     this.http.post(GlobalConstants.apiPrefix+"signup",this.Userobj).subscribe(data=>
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
