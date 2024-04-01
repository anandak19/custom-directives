import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appParagraph]',
  standalone: true
})
export class ParagraphDirective {
  @HostBinding('style.color') textColor: string = '#2f2e2e';
  @HostBinding('style.fontSize') fontSize: string = '18px';
  @HostBinding('style.margin') margin: string = '16px 0';

  constructor(private _element: ElementRef) { }
}

