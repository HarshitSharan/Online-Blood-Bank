import { HttpClient } from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from '../common/global';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sample-detail',
  templateUrl: './sample-detail.component.html',
  styleUrls: ['./sample-detail.component.css']
})
export class SampleDetailComponent implements OnInit {

  id:any
  data:any;
  role:any;
  constructor(private route: ActivatedRoute,private http:HttpClient, private logCheck: LoginService,private navi:Router) { 
    this.id=''
    this.data=
    {
      bloodBankID:'123',
      bloodGroup :'b+',
      bloodPressure:'10',
      PHLevel:'3',
      quantity:4,
      days:24,
      phone:6205540428,
      location:'Giridih,Jharkhand',
      availablity:'Yes' 
    }
  }
 checkRole()
 {

   return this.role!='User'
 }
 goBack()
 {
   let temp;
   this.logCheck.requestData().subscribe(data=>temp=data.role)
   if (temp=='User')
     this.navi.navigateByUrl("user/dashboard")
   else
     this.navi.navigateByUrl("admin/dashboard")
 }
 delete()
 {
   this.http.delete(GlobalConstants.apiPrefix+'admin/sample/'+this.id).subscribe(data=>console.log(data))
   this.navi.navigateByUrl("admin/dashboard")
 }
  ngOnInit(): void 
  {
    this.id=this.route.snapshot.paramMap.get('id')
    this.http.get(GlobalConstants.apiPrefix+"sample/"+this.id).subscribe((data)=>this.data=data)
    //console.log(this.data)
    this.logCheck.requestData().subscribe(data=>this.role=data.role)
  }

}
