import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap7Component } from './baitap7.component';
import {NgxPaginationModule} from 'ngx-pagination'



@NgModule({
  declarations: [Baitap7Component],
  imports: [
    CommonModule,
    NgxPaginationModule,
  ],
  exports: [
    Baitap7Component,
    
  ]
})
export class Baitap7Module { }
