import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTrangchuComponent } from './header-trangchu/header-trangchu.component';
import {MyDirectiveModule} from './../my-directive/my-directive.module'

@NgModule({
  declarations: [HeaderTrangchuComponent],
  imports: [
    CommonModule, MyDirectiveModule
  ],
  exports : [HeaderTrangchuComponent]
})
export class TrangchuModule { }
