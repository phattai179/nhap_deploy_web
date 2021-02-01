import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ContentComponent } from './content/content.component';
import { ContentIntroComponent } from './content-intro/content-intro.component';
import { ContentLastestComponent } from './content-lastest/content-lastest.component';
import { ContentTopComponent } from './content-top/content-top.component';
import { ItemMaxComponent } from './item-max/item-max.component';
import { ItemMinComponent } from './item-min/item-min.component';
import { FooterComponent } from './footer/footer.component';
import { BaitaplayoutComponent } from './baitaplayout.component';



@NgModule({
  declarations: [HeaderComponent, CarouselComponent, ContentComponent, ContentIntroComponent, ContentLastestComponent, ContentTopComponent, ItemMaxComponent, ItemMinComponent, FooterComponent, BaitaplayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BaitaplayoutComponent
  ]
})
export class BaitaplayoutModule { }
