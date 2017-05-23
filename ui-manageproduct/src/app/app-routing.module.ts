import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BatchviewComponent} from './batchview/batchview.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent
  },
   {
    path: 'batchview',
    component: BatchviewComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
