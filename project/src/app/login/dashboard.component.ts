import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  // styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('dashboard') dashboard;
  constructor() { }
  ngOnInit() {
  }
  setNote=""
  remainder=""


  setReminder()
  {
    console.log("inside reminder")
    if(this.remainder=="")
    this.remainder="true"
    else
    this.remainder=""
  }
  setNotes()
  {
    console.log("clicked")
    if(!this.setNote)
    {
     this.setNote="true" 
    }
    else
    {
      this.setNote=""
    }
  }

}
