import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
import {Router} from '@angular/router'
import {AuthService} from 'src/app/core/services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @ViewChild ('formDangKy') formDK !: NgForm
  constructor( private auth: AuthService ,private router: Router) { }

  ngOnInit(): void {
  }

  handleDangKy(){
    if(this.formDK.invalid) return
    console.log(this.formDK.value)
    // this.formDK.reset()

    this.auth.signUp(this.formDK.value).subscribe({
      error: (err) =>{
        console.log('lỗi', err.error)
      },

      complete: () => {
        this.router.navigateByUrl('/signin')
      }
    })
    
  }



}
