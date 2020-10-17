import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormControl, FormsModule } from '@angular/forms';
import {RouterModule, Router, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';
const routes : Routes = [
    { path : "products", component : ProductComponent },
    { path : "", component : HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    [RouterModule.forRoot(routes)]
  ],

  exports : [
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
