import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Location } from '@angular/common'
import { GlobalConstants } from '../common/global';
@Component({
  selector: 'app-donar-detail',
  templateUrl: './donar-detail.component.html',
  styleUrls: ['./donar-detail.component.css']
})
export class DonarDetailComponent implements OnInit {
  id:any;
  data:any;
  role:any;
  constructor(private route: ActivatedRoute,private http:HttpClient,private logCheck: LoginService,private navi:Router,private location:Location) { 
    this.id='';
    this.data={
      id:'',
      donarName:'',
      bloodGroup:'',
      phlevel:'',
      bloodPressure:'',
      weight:'',
      age:'',
      phone:'',
      location:'',
      availablity:''
    }
  }
  checkRole()
  {

    return this.role!='User'
  }
  delete()
  {
    this.http.delete(GlobalConstants.apiPrefix+'admin/donor/'+this.id).subscribe(data=>console.log(data))
    this.navi.navigateByUrl("admin/dashboard")
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
  ngOnInit(): void 
  {
    this.id=this.route.snapshot.paramMap.get('group')
    this.http.get(GlobalConstants.apiPrefix+"/donor/"+this.id).subscribe((data)=>{
      this.data=data

  })
  this.logCheck.requestData().subscribe(data=>this.role=data.role)
  }

}


