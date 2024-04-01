import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeaderParagraph]',
  standalone: true
})
export class HeaderParagraphDirective {

  constructor(private _element : ElementRef ) {
    this._element.nativeElement.style.color = "#6d6200"
    this._element.nativeElement.style.fontWeight = "400"
    this._element.nativeElement.style.fontStyle = "italic"
  }
}