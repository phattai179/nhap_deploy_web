import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nhap-structural-directive',
  templateUrl: './nhap-structural-directive.component.html',
  styleUrls: ['./nhap-structural-directive.component.scss']
})
export class NhapStructuralDirectiveComponent implements OnInit {

  status: boolean = true;
  month: string = "1";
  monthArray = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4"
  ];

  studentArray = [
    {Ten: "Tai", Tuoi: 20, DiemTB: 10},
    {Ten: "Huy", Tuoi: 24, DiemTB: 6},
    {Ten: "Nam", Tuoi: 22, DiemTB: 4},


  ]

  constructor() { }

  ngOnInit(): void {
  }

  Show(){
    this.status = false;
  }

  Hide(){
    this.status = true;
  }

  chonThang(value : any){
    this.month = value;
  }

}
