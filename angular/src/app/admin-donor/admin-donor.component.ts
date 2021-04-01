import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-donor',
  templateUrl: './admin-donor.component.html',
  styleUrls: ['./admin-donor.component.css']
})
export class AdminDonorComponent implements OnInit {

  constructor(private route :Router) { }
  addSample()
  {
    this.route.navigateByUrl('/admin/addSample');
    console.log("navigating")
  }
  ngOnInit(): void {
  }

}
