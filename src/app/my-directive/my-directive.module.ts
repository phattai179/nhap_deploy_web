import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightDirective } from './hightlight.directive';
import { BetterHightlightDirective } from './better-hightlight.directive';
import { ButtonHoverDirective } from './button-hover.directive';



@NgModule({
  declarations: [HightlightDirective, BetterHightlightDirective, ButtonHoverDirective],
  imports: [
    CommonModule
  ],
  exports : [
    HightlightDirective,
    BetterHightlightDirective,
    ButtonHoverDirective
  ]
})
export class MyDirectiveModule { }
