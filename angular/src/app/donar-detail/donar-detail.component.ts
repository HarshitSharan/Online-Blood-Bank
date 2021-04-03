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
  }
  checkRole()
  {
    var role
    this.logCheck.requestData().subscribe(data=>role=data.role)
    return role!='User'
  }
  ngOnInit(): void 
  {
    this.id=this.route.snapshot.paramMap.get('group')
    this.http.get("http://localhost:8080/sample/"+this.id).subscribe((data)=>this.data=data)
  }

}


