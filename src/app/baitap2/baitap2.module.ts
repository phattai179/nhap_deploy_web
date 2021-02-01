import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { SliderComponent } from './slider/slider.component';
import { IndexContentComponent } from './index-content/index-content.component';
import { ItemComponent } from './item/item.component';
import { FooterComponent } from './footer/footer.component';
import { Baitap2Component } from './baitap2.component';



@NgModule({
  declarations: [HeaderComponent, IndexComponent, SliderComponent, IndexContentComponent, ItemComponent, FooterComponent, Baitap2Component],
  imports: [
    CommonModule
  ],
  exports: [
    // HeaderComponent, 
    // IndexComponent, 
    // SliderComponent, 
    // IndexContentComponent, 
    // ItemComponent, 
    // FooterComponent,
    Baitap2Component
  ]
})
export class Baitap2Module { }
