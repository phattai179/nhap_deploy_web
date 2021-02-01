import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import formModule
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

// Import các thư viện module của material
import {MatButtonModule} from '@angular/material/button';


import { MainRoutingModule } from './main-routing.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { LayoutComponent } from './layout/layout.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component'

// Import componentModule để sài component error-massage bên trong
import {ComponentsModule} from '../components/components.module'

// Import pipeModule vào để sử dụng trong ở các Component trong mainModule
import {PipeModule} from '../pipe/pipe.module'

@NgModule({
  declarations: [MovieDetailComponent, HomeComponent, BookingComponent, LayoutComponent, SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,

    PipeModule,
    // import các module thư viện của material design
    MatButtonModule,

    
  ]
})
export class MainModule { }
