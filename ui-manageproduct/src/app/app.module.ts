import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MdRippleModule } from '@angular2-material/core/core';
import {MdCardModule} from '@angular2-material/card';
import {MdButtonModule} from '@angular2-material/button';
import {MdIconModule} from '@angular2-material/icon';
import {MdToolbarModule} from '@angular2-material/toolbar';
import{MdTabsModule} from '@angular2-material/tabs';
import {MdIconRegistry} from '@angular2-material/icon';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BatchviewComponent } from './batchview/batchview.component';
import { ProductlistComponent } from './productlist/productlist.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BatchviewComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdTabsModule,
    MdIconModule

  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
