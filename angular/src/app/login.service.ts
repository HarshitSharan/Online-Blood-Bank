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
  changeState(userid:string='')
  {

      if(localStorage.getItem('userId'))
      {
        this.username='';
        this.state=false;
        localStorage.removeItem('userId');
      }
      else
      {
        localStorage.setItem('userId',userid)
        this.username=userid;
        this.state=true;
      }
  }
  requestData(userId:string){
    this.http.get('http://localhost:8080/UserDetails/'+userId).subscribe((data:any)=>{
    
      this.userData=data
      console.log(this.userData.role+"  serveice")    
  })
  }

}