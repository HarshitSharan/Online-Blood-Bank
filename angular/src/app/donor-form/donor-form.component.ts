import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../common/global';

@Component({
  selector: 'app-donor-form',
  templateUrl: './donor-form.component.html',
  styleUrls: ['./donor-form.component.css']
})
export class DonorFormComponent implements OnInit {
  donorObj:any;
  constructor(private http:HttpClient,private route :Router) {
    this.donorObj={}
   }
 sendData()
 {
   console.log(this.donorObj);
   this.http.post(GlobalConstants.apiPrefix+"admin/addDonor",this.donorObj).subscribe(data=>console.log(data))
    //console.log("send obj")
   this.route.navigateByUrl("admin/dashboard")

 }
  ngOnInit(): void {
    
  }

}
