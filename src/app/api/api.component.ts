import { Component, OnInit } from '@angular/core';
import {ApiService} from  '../shared/services/api.service';
import { sendRequest } from 'selenium-webdriver/http';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  list:any[]=[];
 // apimodel:any = {
    //username: '', id: '', title: '', completed: '', 
// };
  
  

  constructor(private apiservice:ApiService) { }

  ngOnInit() { 
    //this.getResults();
    //this.apiservice.sendRequest().subscribe(data =>{
    //this.list=data;
    
   // })
  }
  //getResults() {
  // this.apiservice.sendRequest().subscribe(data => {
     //console.log(data);
     // this.list=data;
    //})
  //}
}
