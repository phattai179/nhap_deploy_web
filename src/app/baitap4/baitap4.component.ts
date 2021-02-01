import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap4',
  templateUrl: './baitap4.component.html',
  styleUrls: ['./baitap4.component.scss']
})
export class Baitap4Component implements OnInit {
  email: string = "";
  fullName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit(value: string){

    this.fullName = value
  }

}
