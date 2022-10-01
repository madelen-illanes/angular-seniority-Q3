import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './components/slider/slider.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, SliderComponent],
<<<<<<< HEAD
  imports: [BrowserModule, 
     AppRoutingModule,
     HttpClientModule,
     FormsModule, 
     ReactiveFormsModule],
=======
  imports: [BrowserModule, AppRoutingModule, FormsModule,  HttpClientModule,ReactiveFormsModule],
>>>>>>> 512be9b4932fb5b69ec8836036df9f7e96413a08
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
