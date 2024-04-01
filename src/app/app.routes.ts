import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : "", 'title' : 'Blog',
        loadComponent: () => import('./blog-page/blog-page.component').then((c) => c.BlogPageComponent)
    },
    {
        path : "author", 'title' : 'Author',
        loadComponent: () => import('./author/author.component').then((c) => c.AuthorComponent)
    }
];