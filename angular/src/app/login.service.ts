import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  }
  checkState( )
  {
    if(localStorage.getItem('userId'))
    {
      this.state=true;
      return true;
    }
    else
    {
      this.state=false;
      return false;
    }
  }
   changeState(userid:string)
  {
      
        console.log("else")
       localStorage.setItem('userId',userid)
        this.username=userid;
        this.state=true;
        
  }
  logout()
  {
    this.username='';
    this.state=false;
    localStorage.removeItem('userId');
  }
  requestData(userId:any='') :Observable<any>
  {
    if(!userId)
      userId=localStorage.getItem('userId');
    return this.http.get('http://localhost:8080/UserDetails/'+userId);
  }

}