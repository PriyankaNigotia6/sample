import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../services/appservice.service';
 
@Component({
  selector: 'app-servicescheck',
  templateUrl: './servicescheck.component.html',
  styleUrls: ['./servicescheck.component.css'] ,
 // providers: [AppserviceService]
})
export class ServicescheckComponent  {
  message:string;
  message1:string;
  messagenewobj:string;
  constructor (private appservice :AppserviceService) { }

  ngOnInit() {
    //create service obj using new
    let newobj = new AppserviceService();
    this.messagenewobj = newobj.myservicemethod();
    this.message= this.appservice.myservicemethod();
    this.message1= this.appservice.myservicemethod1("this inside method ");
  }

}
