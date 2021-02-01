import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NhapStructuralDirectiveComponent } from './nhap-structural-directive/nhap-structural-directive.component';



@NgModule({
  declarations: [NhapStructuralDirectiveComponent],
  imports: [
    CommonModule
  ],
  exports : [
    NhapStructuralDirectiveComponent
  ]
})
export class NhapDirectivesModule { }
