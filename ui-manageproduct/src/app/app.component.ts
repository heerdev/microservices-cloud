import { Component } from '@angular/core';

import {MdToolbar} from '@angular/material';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import{AppService} from "./app.service"
import { OnInit } from '@angular/core';

import {TimerObservable} from "rxjs/observable/TimerObservable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  showProductlist:boolean=true;
  showDashboard:boolean;
  showBatchView:boolean;


changeTab(event):void{
if (event.index==0) {
  this.showProductlist=true;
   this.showBatchView=false;
}else{
  console.log(event.index);
  this.showBatchView=true;
    this.showProductlist=false;
}

}

ngOnInit(): void {


}


                        
                        
     
}
