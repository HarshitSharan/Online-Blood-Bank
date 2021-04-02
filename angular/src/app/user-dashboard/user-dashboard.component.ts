import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  flag:boolean;
  constructor() {
    this.flag=true;
   }

   changeFlag(state:boolean)
   {
     console.log("flag"+ this.flag)
    this.flag=state
   }
  ngOnInit(): void {
    
  }

}
