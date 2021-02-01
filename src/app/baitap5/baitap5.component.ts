import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap5',
  templateUrl: './baitap5.component.html',
  styleUrls: ['./baitap5.component.scss']
})
export class Baitap5Component implements OnInit {

  name : string = "";
  password: string = "";
  isLogin : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeLogin(userNameRef : string, passwordRef: string){

    if(userNameRef === "cybersoft" && passwordRef === "cybersoft"){
      this.name = userNameRef;
      this.password = passwordRef;
      this.isLogin = !this.isLogin;

      let userLogin = {
        nameLogin: this.name,
        passwordLogin: this.password
      }

      localStorage.setItem("USER", JSON.stringify(userLogin))

      alert('Login thành công')
    }else{
      alert('Tên đăng nhập hoặc mật khẩu không đúng')
    }

  }
}
