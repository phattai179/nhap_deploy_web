import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {

  constructor(private El: ElementRef, private renderer2: Renderer2) { }

  ngOnInit(){
    this.renderer2.setStyle(this.El.nativeElement, "background-color", "blue");
    // this.renderer2.appendChild(this.El.nativeElement,'Cybersoft academy')
    let noiDung = this.renderer2.createText('cybersoft academy')
    this.renderer2.appendChild(this.El.nativeElement, noiDung);
  }

}
