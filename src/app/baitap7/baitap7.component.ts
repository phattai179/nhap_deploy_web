import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap7',
  templateUrl: './baitap7.component.html',
  styleUrls: ['./baitap7.component.scss']
})
export class Baitap7Component implements OnInit {

  p: number = 1;
  mangSanPham: any[] = [
    { MaSP: 1, TenSP: "Sony XZ", Gia: 1000 },
    { MaSP: 2, TenSP: "Sony XZ2", Gia: 2000 },
    { MaSP: 3, TenSP: "HTC U Ultra", Gia: 3000 },
    { MaSP: 4, TenSP: "HTC U12 Plus", Gia: 500 },
    { MaSP: 5, TenSP: "Iphone XS MAX", Gia: 11000 },
    { MaSP: 6, TenSP: "Iphone XR", Gia: 15000 },
    { MaSP: 7, TenSP: "Xiaomi Mi Note 3", Gia: 9900 },
    { MaSP: 8, TenSP: "Xiaomi Mi 8", Gia: 1000 },
    { MaSP: 9, TenSP: "Galaxy Note 9", Gia: 1000 },
    { MaSP: 10, TenSP: "Galaxy S9 Plus", Gia: 1500 },
    { MaSP: 11, TenSP: "Nokia X9", Gia: 1000 },
    { MaSP: 12, TenSP: "ViVo", Gia: 2000 },
    { MaSP: 13, TenSP: "Nokia W10", Gia: 4000 },
    { MaSP: 14, TenSP: "Meizu M2", Gia: 5000 },
    { MaSP: 15, TenSP: "Oppo F8", Gia: 2000 },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleThemSanPham(maSP: string, tenSP: string, gia: string){

    const newSanPham = {
      MaSP: maSP,
      TenSP: tenSP,
      Gia: gia
    }
    
    let index = this.mangSanPham.findIndex(sanPham => sanPham.MaSP === maSP);


    if(index !== 1){
      this.mangSanPham.push(newSanPham)
    }else{
      alert('Trùng mã sản phẩm')
    }
  }

  handleXoaSanPham(maSP: number){
    this.mangSanPham = this.mangSanPham.filter(sanPham => sanPham.MaSP !== maSP)
  }
}
