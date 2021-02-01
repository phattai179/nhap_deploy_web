import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.scss']
})
export class Baitap6Component implements OnInit {

  dsSanPham : any[] = [

  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleThemSanPham(maSPRef: string, tenSPRef : string, giaRef: any ){

    console.log(typeof(giaRef))

    let sanPham = {
      maSP: maSPRef,
      tenSP: tenSPRef,
      gia: giaRef
    }

    this.dsSanPham.push(sanPham)
  }
}
