import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../common/global';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {
  sampleObj:any;
  constructor(private http: HttpClient,private route:Router) {
    this.sampleObj=
    {
      bloodBankID:'',
      bloodGroup:'',
      bloodPressure:'',
      phlevel:'',
      quantity:'',
      mobileNumber:'',
      location:'',
      availability:''
    }
   }

  sendData()
  {
    this.http.post(GlobalConstants.apiPrefix+'admin/addSample',this.sampleObj).subscribe((data)=>console.log(data))
    this.route.navigateByUrl('admin/dashboard')
   // console.log(this.sampleObj)
  }
  cancel()
  {
    this.route.navigateByUrl('admin/dashboard')
  }
  ngOnInit(): void {
  }

}
