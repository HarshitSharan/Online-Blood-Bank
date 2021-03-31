import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username:string;
  state:boolean;
  userData:any;
  constructor(private http:HttpClient )
  { 
    this.username='';
    this.state=true;
    this.userData=
    {
      FirstName:"",
      LastName:"",
      userId:"",
      mobileNumber:undefined,
      email:"",
      role:"admin"
    }
  }
  changeState(userid:string='')
  {
      if(this.state)
      {
        this.username='';
        this.state=false;
      }
      else
      {
        this.username=userid;
        this.state=true;
      }
      console.log(this.username)
  }
  requestData(userId:string){
    this.http.get('http://localhost:8080/UserDetails/'+userId).subscribe((data)=>
    this.userData=data)
  }


}