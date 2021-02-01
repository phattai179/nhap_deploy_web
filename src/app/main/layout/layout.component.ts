import { Component, OnDestroy, OnInit } from '@angular/core';
import {AuthService} from 'src/app/core/services/auth.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  currentUser: any = null;
  // Subcription có hàm unsubscribe khi hk cần thay đổi
  currentUserSubcription: Subscription | null = null


  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.auth.currentUser.asObservable().subscribe({
      next: (result) => {
        this.currentUser = result;
      }
    })
  }

  // Chạy trước khi component bị hủy
  ngOnDestroy(): void{
    // Hủy theo dõi biến currentUser khi components bị unmount
    this.currentUserSubcription?.unsubscribe()
  }


}
