import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
   this.http.post("http://localhost:8080/admin/addDonor",this.donorObj).subscribe(data=>console.log(data))
    //console.log("send obj")
   this.route.navigateByUrl("admin/dashboard")

 }
  ngOnInit(): void {
    
  }

}
