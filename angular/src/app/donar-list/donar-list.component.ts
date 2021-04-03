import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donar-list',
  templateUrl: './donar-list.component.html',
  styleUrls: ['./donar-list.component.css']
})
export class DonarListComponent implements OnInit {
  donarList:any;
  keyword:string;
  temp:any;
  constructor(private http:HttpClient,private route:Router) 
  { 
    let obj={
      bloodGroup :'',
      donarName:'',
      phone:0,
      id:''
    }
    this.donarList=[]

    this.keyword=''
  }
  hyperLink(id:string)
  {
    this.route.navigateByUrl("donor/"+id)
  }
  search()
  {
    this.donarList=this.temp;
    if(this.keyword!='')
    {
      this.donarList=this.donarList.filter((data:any)=>{
        return data.bloodGroup.toLocaleLowerCase().startsWith(this.keyword.toLocaleLowerCase())
      })
    }
  }

  ngOnInit(): void {
     this.http.get('http://localhost:8080/donor').subscribe((data)=>{
     this.donarList=data
     this.temp=data
     })

  }


}
