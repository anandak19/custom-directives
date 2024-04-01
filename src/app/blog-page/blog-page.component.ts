import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthorComponent } from '../author/author.component';
import { ParagraphDirective } from '../paragraph/paragraph.directive';
import { AuthorBtnDirective } from '../author-btn/author-btn.directive';
import { HeaderParagraphDirective } from '../header-paragraph/header-paragraph.directive';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet, 
    RouterLinkActive, 
    AuthorComponent, 
    ParagraphDirective, 
    AuthorBtnDirective, 
    HeaderParagraphDirective],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {

}
