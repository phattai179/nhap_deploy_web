import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';


@Component({
  selector: 'app-error-massage',
  templateUrl: './error-massage.component.html',
  styleUrls: ['./error-massage.component.scss']
})
export class ErrorMassageComponent implements OnInit {

  @Input() control : AbstractControl | NgModel | null = null
  @Input() name: string = ""

  massage: any = {
    taiKhoan: {
      required: "Tài khoản không được bỏ trống",
      minlength: "Tài khoản phải từ 5 - 15 ký tự",
      maxlength: "Tài khoản phải từ 5 - 15 ký tự"
    },

    matKhau: {
      required: "Mật khẩu không được bỏ trống"
    },

    required: "Trường không được bỏ trống"
  }

  constructor() { }

  ngOnInit(): void {
  }

  

}
