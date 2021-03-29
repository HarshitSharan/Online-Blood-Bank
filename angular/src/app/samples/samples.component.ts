import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  sampleList:any;
  constructor(private http:HttpClient) { 
    this.sampleList={
      sampleGroup :'',
      quantity:0,
      location: '',
      mobile:'',
      id:''

    }
  }

  ngOnInit(): void {
    // this.http.get('http://localhost:8080/sample').subscribe((data)=>{
    // this.sampleList=data
    // })
    this.sampleList=[{
      sampleGroup :'b+',
      quantity:10,
      location: 'Giridih,Jharkhand',
      mobile:'1234567890',
      id:'1'

    },
    {
      sampleGroup :'ab-',
      quantity:20,
      location: 'Jhumri Teliya,Jharakhand,Jhumri Teliya,Jharakhand,Jhumri Teliya,Jharakhand,Jhumri Teliya,Jharakhand,Jhumri Teliya,Jharakhand',
      mobile:'1234567890',
      id:'2'

    },
    {
      sampleGroup :'a+',
      quantity:15,
      location: 'Kolkata,West Bengal',
      mobile:'1234567890',
      id:'45'

    },
    {
      sampleGroup :'o+',
      quantity:14,
      location: 'jksajfad, jkdsafjafkjs',
      mobile:'1234567890',
      id:'43'

    },
    {
      sampleGroup :'o+',
      quantity:14,
      location: 'jksajfad, jkdsafjafkjs',
      mobile:'1234567890',
      id:'43'

    },
    {
      sampleGroup :'o+',
      quantity:14,
      location: 'jksajfad, jkdsafjafkjs',
      mobile:'1234567890',
      id:'43'

    }]
  }

}
