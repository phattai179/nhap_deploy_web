import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import FormModule để có thể sử dụng two-way binding
import { FormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination'

// import Http Client Module, // Http Interceptor
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Baitap1Module } from './baitap1/baitap1.module';
import { Baitap2Module } from './baitap2/baitap2.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { Baitap4Module } from './baitap4/baitap4.module';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { BaitaplayoutModule } from './baitaplayout/baitaplayout.module';
import { Baitap5Module } from './baitap5/baitap5.module';
import { Baitap6Module } from './baitap6/baitap6.module';
import { NhapDirectivesModule } from './nhap-directives/nhap-directives.module';
import { MyDirectiveModule } from './my-directive/my-directive.module';
import { TrangchuModule } from './trangchu/trangchu.module';
import { ComponentsModule } from './components/components.module';
import { DirectiveModule } from './directive/directive.module';
import { InteractionModule } from './interaction/interaction.module'
import { Baitap8Module } from './baitap8/baitap8.module';
import { Baitap7Module } from './baitap7/baitap7.module';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//NgModule để appModule được hiểu là 1 module chứ không phải là 1 class thông thường
@NgModule({
  // Nơi khai báo các component được quản lý bởi module. Vd ở đây AppComponent đang được declarations quản lý
  declarations: [
    AppComponent,
    DemoComponent,
    DataBindingComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
  ],

  // Nơi khai báo các module sẽ được sử dụng 
  // HomeModule: HeaderComponent, FooterComponent, ContentComponent
  // => Để sử dụng các component của HomeModule trong AppModule cần phải gắn HomeModule vào trong imports
  // Những module do angular cung cấp sẵn: RouterModule, FormsModule, HttpClientModule
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,

    // Baitap1Module,
    Baitap2Module,
    Baitap4Module,
    BaitaplayoutModule,
    Baitap5Module,
    Baitap6Module,
    NhapDirectivesModule,
    MyDirectiveModule,
    TrangchuModule,
    ComponentsModule,
    DirectiveModule,
    InteractionModule,
    Baitap8Module,
    Baitap7Module,
    BrowserAnimationsModule,
    


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
