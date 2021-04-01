import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { StatusReportService } from './status-report.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private logCheck:LoginService,private status:StatusReportService,private route:Router)
  {

  }
  canActivate()
  {
    console.log(this.logCheck.state)
      if(!this.logCheck.state)
      {
        this.status.changeMessage('NA')
        this.route.navigateByUrl('login')
      }
      return this.logCheck.state;
  }
  
}
