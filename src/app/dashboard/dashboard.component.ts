import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name:string;
 title:string;
 info:string;
 colors='red';
 car:Array<string>;
 mycolor='coral';
 objtest:any;
 Object = Object;
 pmessage:string = "i am coming from other component..";
 

  constructor() {
   
   }

  ngOnInit() {
    console.log("hiiooo");
    this.title = "welcome to my dashBord using string interpolation";
    this.info="one way binding using [] bracket";
    this.car=["BMW","Maruti","Audi","RollsRoice","Honda"];
    
    this.objtest={'key1':'value1','key2':'value2','key3':['arrvalue1','arrvalue1']};  
  }

  //this is for handling output event coming from other component in custom element..
  handelevent(eventdata)
  {
    //can put any variable also..
   alert(eventdata);
   console.log(eventdata);
  }

  clickMe()
  {
    alert("my name is event binding");
   // this.name ='priya';
  // this.name = name;
    console.log(this.name);
  }
  
  

}
