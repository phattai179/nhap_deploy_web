import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, ContentComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent, 
    SidebarComponent, 
    FooterComponent
  ]
})
export class Baitap1Module { }
