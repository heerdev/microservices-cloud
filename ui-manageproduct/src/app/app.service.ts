import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import {BatchStatus} from './model/batchStatus';


@Injectable()
export class AppService{
     constructor (private http: Http) {}
     private batch1Url = 'http://ec2-user@ec2-52-34-104-85.us-west-2.compute.amazonaws.com:8080/statusbatch1'; 
     private batch2Url = 'http://ec2-user@ec2-52-34-104-85.us-west-2.compute.amazonaws.com:8080/statusbatch2'; 
     private batch3Url = 'http://ec2-user@ec2-52-34-104-85.us-west-2.compute.amazonaws.com:8080/statusbatch3'; 
     private batch4Url = 'http://ec2-user@ec2-52-34-104-85.us-west-2.compute.amazonaws.com:8080/statusbatch4';
     private batch5Url = 'http://ec2-user@ec2-52-34-104-85.us-west-2.compute.amazonaws.com:8080/statusbatch5';
     private batch6Url = 'http://ec2-user@ec2-52-34-104-85.us-west-2.compute.amazonaws.com:8080/statusbatch6'; 
     private batch7Url = 'http://ec2-user@ec2-52-34-104-85.us-west-2.compute.amazonaws.com:8080/statusbatch7'; 
     private batch8Url = 'http://ec2-user@ec2-52-34-104-85.us-west-2.compute.amazonaws.com:8080/statusbatch8'; 
     private deployUrl = 'http://ec2-user@ec2-52-34-104-85.us-west-2.compute.amazonaws.com:8080/deployresults'; 

getStatusBacth1(){
      return this.http.get(this.batch1Url)
             .map(response => response.json() as BatchStatus);
    
}
getStatusBacth2(){
      return this.http.get(this.batch2Url)
         .map(response => response.json() as BatchStatus);
    
}
getStatusBacth3(){
      return this.http.get(this.batch3Url)
        .map(response => response.json() as BatchStatus);
    
}
getStatusBacth4(){
      return this.http.get(this.batch4Url)
       .map(response => response.json() as BatchStatus);
}
getStatusBacth5(){
      return this.http.get(this.batch5Url)
       .map(response => response.json() as BatchStatus);
}
getStatusBacth6(){
      return this.http.get(this.batch6Url)
       .map(response => response.json() as BatchStatus);
}
getStatusBacth7(){
      return this.http.get(this.batch7Url)
       .map(response => response.json() as BatchStatus);
}
getStatusBacth8(){
      return this.http.get(this.batch8Url)
       .map(response => response.json() as BatchStatus);
}
deployResult(){
      return this.http.get(this.deployUrl)
      .map(response => response.json() as BatchStatus);
}

}