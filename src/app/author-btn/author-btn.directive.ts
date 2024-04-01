import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAuthorBtn]',
  standalone: true
})
export class AuthorBtnDirective {

  constructor(private _element: ElementRef) { }

  @HostListener ('mouseenter') onMouseEnter(){
    this.highlight('#fff700');
  }

  @HostListener ('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color: string) {
    this._element.nativeElement.style.backgroundColor = color;
  }


}
