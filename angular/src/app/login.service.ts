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
  async changeState(userid:string='')
  {
      
      if( await localStorage.getItem('userId'))
      {

        console.log("if")
        this.username='';
        this.state=false;
        await localStorage.removeItem('userId');
      }
      else
      {
        console.log("else")
        await localStorage.setItem('userId',userid)
        this.username=userid;
        this.state=true;
      }
  }
  requestData(userId:string) :Observable<any>
  {
    return this.http.get('http://localhost:8080/UserDetails/'+userId);
  }

}