import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingGuard } from '../core/guards/booking.guard';
import { SignupGuard } from '../core/guards/signup.guard';

import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: "booking/:bookingId", component: BookingComponent, canActivate: [BookingGuard]},
  {path: "", component: LayoutComponent, 
    children : [
    {path: "movie/:movieId", component: MovieDetailComponent},
    {path: "signup", component: SignupComponent, canDeactivate: [SignupGuard]},
    {path: "signin", component: SigninComponent},
    {path: "", component: HomeComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
