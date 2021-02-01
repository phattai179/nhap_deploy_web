import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { DanhSachGheDaDatComponent } from './danh-sach-ghe-da-dat/danh-sach-ghe-da-dat.component';
import { GheComponent } from './ghe/ghe.component';
import { Baitap8Component } from './baitap8.component';
import {Baitap8RoutingModule} from './baitap8-routing.module'


@NgModule({
  declarations: [DanhSachGheComponent, DanhSachGheDaDatComponent, GheComponent, Baitap8Component],
  imports: [
    CommonModule
  ],
  exports: [
    Baitap8Component,
    Baitap8RoutingModule
  ]
})
export class Baitap8Module { }
