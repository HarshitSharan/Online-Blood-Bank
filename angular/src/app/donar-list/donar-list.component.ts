import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donar-list',
  templateUrl: './donar-list.component.html',
  styleUrls: ['./donar-list.component.css']
})
export class DonarListComponent implements OnInit {
  donarList:any;
  keyword:string;

  constructor(private http:HttpClient) 
  { 
    let obj={
      bloodType :'',
      Name:'',
      mobile:0,
      id:''
    }
    this.donarList=[]

    this.keyword=''
  }
  hyperLink()
  {
    console.log("clicked")
  }
  search()
  {
    this.ngOnInit()
    if(this.keyword!='')
    {
      this.donarList=this.donarList.filter((data:any)=>{
        return data.bloodType.toLocaleLowerCase().startsWith(this.keyword.toLocaleLowerCase())
      })
    }
    else
      this.ngOnInit()

  }

  ngOnInit(): void {
    // this.http.get('http://localhost:8080/donor').subscribe((data)=>{
    // this.sampleList=data
    // })
    this.donarList=[
      {
        bloodType :'b+',
        Name:'Harshit',
        mobile:6205540428,
        id:'32'
      },
      {
        bloodType :'ab+',
        Name:'Sharan',
        mobile:8877078008,
        id:'2'
      },
      {
        bloodType :'b-',
        Name:'Harsh',
        mobile:6205540528,
        id:'323'
      },
      {
        bloodType :'o+',
        Name:'Harshit',
        mobile:6205540428,
        id:'32'
      },
      {
        bloodType :'o-',
        Name:'Harshit',
        mobile:6205540428,
        id:'32'
      },
      
    ]
  }


}
