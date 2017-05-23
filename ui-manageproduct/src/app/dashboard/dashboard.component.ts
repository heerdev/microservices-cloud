import { Component, OnInit } from '@angular/core';
import{AppService} from "../app.service";
import{BatchStatus} from "../model/batchStatus"
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
    providers: [AppService]
})
export class DashboardComponent implements OnInit {

 constructor (private appService: AppService) {}

batch1:BatchStatus;
batch2:BatchStatus;
batch3:BatchStatus;
batch4:BatchStatus;
batch5:BatchStatus;
batch6:BatchStatus;
batch7:BatchStatus;
batch8:BatchStatus;
deployMessage:BatchStatus;


getStatusBacth1(){ 
  return this.appService.getStatusBacth1();
}

getStatusBacth2(){ 
  return this.appService.getStatusBacth2();
}
getStatusBacth3(){ 
  return this.appService.getStatusBacth3();
}
getStatusBacth4(){ 
  return this.appService.getStatusBacth4();
}
getStatusBacth5(){ 
  return this.appService.getStatusBacth5();
}
getStatusBacth6(){ 
  return this.appService.getStatusBacth6();
}
getStatusBacth7(){ 
  return this.appService.getStatusBacth7();
}
getStatusBacth8(){ 
  return this.appService.getStatusBacth8();
}
deploy(){
  console.log("calling deploy");
  return this.appService.deployResult()
    .subscribe(deployMessage => this.deployMessage =deployMessage);
  
}
ngOnInit(): void {
  
  this.getStatusBacth1()
  .subscribe(batch1=> 
  {

    this.batch1 =batch1;
       console.log(batch1.startTime.dayOfWeek);
       console.log(batch1.startTime.month);
       console.log(batch1.startTime.year);
      }
  );

   this.getStatusBacth2()
  .subscribe(batch2 => this.batch2 =batch2);
   this.getStatusBacth3()
  .subscribe(batch3 => this.batch3 =batch3);
   this.getStatusBacth4()
  .subscribe(batch4 => this.batch4 =batch4);
  this.getStatusBacth5()
  .subscribe(batch5 => this.batch5 =batch5);
  this.getStatusBacth6()
  .subscribe(batch6 => this.batch6 =batch6);
  this.getStatusBacth7()
  .subscribe(batch7 => this.batch7 =batch7);
  this.getStatusBacth8()
  .subscribe(batch8 => this.batch8 =batch8);

}
}
