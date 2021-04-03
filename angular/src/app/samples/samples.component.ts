import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  sampleList:any;
  keyword:string;
   temp:any;
  constructor(private http:HttpClient,private route: Router) 
  { 
    let obj={
      bloodGroup :'',
      weight:0,
      location: '',
      phone:'',
      bloodBankID:''
    }
    this.sampleList=[]

    this.keyword=''
  }
  addSample()
  {
    this.route.navigateByUrl('/admin/addSample');
    console.log("navigating")
  }
  hyperLink(id:string)
  {
    this.route.navigateByUrl("sample/"+id)
  }
  fun()
  {
    this.sampleList=this.temp;
  }
  search()
  {
   this.fun(); 
    if(this.keyword!='')
    {
      this.sampleList=this.sampleList.filter((data:any)=>{
        return data.bloodGroup.toLocaleLowerCase().startsWith(this.keyword.toLocaleLowerCase())
      })
    }
    
 
  }

  ngOnInit(): void {
     this.http.get('http://localhost:8080/sample').subscribe((data)=>{
     this.sampleList=data
     this.temp=data;
     })

  }

}

