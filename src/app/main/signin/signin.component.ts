import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {AuthService} from 'src/app/core/services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  formDangNhap: FormGroup
  constructor(private auth : AuthService, private router: Router) {

    this.formDangNhap = new FormGroup({
      taiKhoan : new FormControl("",
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),
      matKhau: new FormControl("", [Validators.required])
    })
  }


  ngOnInit(): void {
  }

  handleDangNhap(){
    this.formDangNhap.markAllAsTouched()
    if(this.formDangNhap.invalid) return
    // alert('Sign In')
    console.log(this.formDangNhap.value)

    this.auth.signIn(this.formDangNhap.value).subscribe({
      next: (result) => {
        
        // Set value cho current trong authService 
        this.auth.currentUser.next(result)

        // Lưu xuông localStorage
        localStorage.setItem('USER', JSON.stringify(result))

        const {maLoaiNguoiDung} = result;
        console.log((window as any).PATH)
         if((window as any).PATH){
           console.log((window as any).PATH)
           this.router.navigateByUrl((window as any).PATH);
           (window as any).PATH = null
         }else if (maLoaiNguoiDung === "QuanTri"){
           this.router.navigateByUrl('/admin')
         }else{
          this.router.navigateByUrl('/')
         }
        

        alert('Đăng nhập thành công')
        console.log('nguoiDung', result)
      },

      error: (err) => {
        console.log(err.error)
      },


    })
  }

}
