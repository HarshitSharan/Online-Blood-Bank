import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sample-detail',
  templateUrl: './sample-detail.component.html',
  styleUrls: ['./sample-detail.component.css']
})
export class SampleDetailComponent implements OnInit {

  id:any
  data:any;
  constructor(private route: ActivatedRoute,private http:HttpClient) { 
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

  ngOnInit(): void 
  {
    this.id=this.route.snapshot.paramMap.get('id')
    this.http.get("http://localhost:8080/sample/"+this.id).subscribe((data)=>this.data=data)
  }

}
