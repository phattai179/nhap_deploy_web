import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NhapHightlightDirective } from './nhap-hightlight.directive';



@NgModule({
  declarations: [NhapHightlightDirective],
  imports: [
    CommonModule
  ],
  exports: [
    NhapHightlightDirective
  ]
})
export class DirectiveModule { }
