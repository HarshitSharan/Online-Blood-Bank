import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'no-account',
  templateUrl: './no-account.component.html',
  styleUrls: ['./no-account.component.css']
})
export class NoAccountComponent implements OnInit {

  message:any;
  @Input('type') type:string;
  constructor() {
    this.message={ text1:'', text2:'',link:'' }
    this.type=''
   }

  ngOnInit(): void 
  {
    if(this.type=="login")
    {
      this.message.text1= "Not having an account ?";
      this.message.text2="Up";
      this.message.link="/signup";
    }
    else
    {
      this.message.text1= "Already having an account ?";
      this.message.text2="In";
      this.message.link="/login";
    }
      
  }

}
