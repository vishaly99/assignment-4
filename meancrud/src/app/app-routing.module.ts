import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductGetComponent} from './product-get/product-get.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductDisplayComponent} from './product-display/product-display.component';
const routes: Routes = [
  {
    path:'product/create',
    component:ProductAddComponent
  },
  {
    path:'product/edit/:id',
    component:ProductEditComponent
  },
  {
    path:'product',
    component:ProductGetComponent
  },
  {
    path:'product/display',
    component:ProductDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
