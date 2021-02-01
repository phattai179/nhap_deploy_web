import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {SignupComponent} from '../../main/signup/signup.component'

@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanDeactivate<unknown> {
  canDeactivate(

    component: SignupComponent, // Giống viewChild sẽ trỏ đến component đó
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // Return về true cho phép rời khỏi router

      const isDirty = component.formDK.dirty && !component.formDK.submitted

      if(isDirty){
        const isConfirm = confirm('Bạn có muốn rời khỏi, tất cả dữ liệu sẽ bị mất');

        return isConfirm
      }

    return true;
  }
  
}
