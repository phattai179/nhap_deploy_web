import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import {ApiService} from './api.service'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject<any>(null);
  // currentUser.next(value) => Set giá trị cho biến currentUser
  // currentUser.value => Get giá trị của biến currentUser
  // currentUser.asObservable() => Chuyển currentUser thành 1 observable

  constructor(private http : HttpClient, private api : ApiService) { }

  signUp(values: any): Observable<any>{
    // C1
    // const url = "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy"

    // return this.http.post(url, {...values, maNhom: "GP01"})

    // C2
    const url = "QuanLyNguoiDung/DangKy"

    return this.api.post(url, {...values, maNhom: "GP01"})
  }

  signIn(values: any): Observable<any>{
    // let url = `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`;

    // return this.http.post(url, values)

    // C2
    let url = `QuanLyNguoiDung/DangNhap`;

    return this.api.post(url, values)
  }

}
