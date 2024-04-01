import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderParagraphDirective } from '../header-paragraph/header-paragraph.directive';
import { ParagraphDirective } from '../paragraph/paragraph.directive';
import { AuthorBtnDirective } from '../author-btn/author-btn.directive';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet, 
    RouterLinkActive,
    HeaderParagraphDirective,
    ParagraphDirective,
    AuthorBtnDirective
  ],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent {

}
