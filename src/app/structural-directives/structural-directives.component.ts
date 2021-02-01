import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  isActive: boolean = true;
  isLogin: boolean = false;
  color: string = 'primary'
  dssv: any[] = [
      {hoTen: "Tài", lop: "FE54"},
      {hoTen: "Huy", lop: "FE55"},
      {hoTen: "Nam", lop: "FE56"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
