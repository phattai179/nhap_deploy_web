import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNhapHightlight]'
})
export class NhapHightlightDirective {


  constructor(private elmentRef : ElementRef) {

    // Thêm style
    this.elmentRef.nativeElement.style.backgroundColor = 'red';

    // Thêm class
    this.elmentRef.nativeElement.classList.add('w-25')

    // Kiểm tra chiều dài và chiều rộng của thẻ
    
    console.log(this.elmentRef.nativeElement.clientWidth)
    console.log(this.elmentRef.nativeElement.clientHeight)
    
  }

  @HostListener ('mouseenter') handleMouseEnter() {
    this.elmentRef.nativeElement.style.backgroundColor = 'green'
  }

  @HostListener ('mouseleave') handleMouseLeave() {
    this.elmentRef.nativeElement.style.backgroundColor = 'red'
  }

  @HostListener ('click') handClick (){
    this.elmentRef.nativeElement.classList.remove('w-25')
    this.elmentRef.nativeElement.classList.add('w-100')
  }

}
