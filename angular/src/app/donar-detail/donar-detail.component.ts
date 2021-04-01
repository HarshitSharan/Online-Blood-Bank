import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-donar-detail',
  templateUrl: './donar-detail.component.html',
  styleUrls: ['./donar-detail.component.css']
})
export class DonarDetailComponent implements OnInit {
  id:any;
  data:any;
  constructor(private route: ActivatedRoute,private http:HttpClient,private logCheck: LoginService) { 
    this.id='';
    this.data=
    {
      Id:'123',
      bloodGroup :'b+',
      donorName:'Harshit Sharan',
      bloodPressure:'10',
      active:false,
      weight:'10kg',
      age:'20 Years',
      PHLevel:'3',
      phone:6205540428,
      location:'Giridih,Jharkhand',
      availablity:'Yes' 
    }
  }
  checkRole()
  {
    return this.logCheck.userData.role=='admin'
  }
  ngOnInit(): void 
  {
    this.id=this.route.snapshot.paramMap.get('group')
    this.http.get("http://localhost:8080/sample/"+this.id).subscribe((data)=>this.data=data)
  }

}


