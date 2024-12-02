import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {BookListComponent} from "./app/book-list/book-list.component";
import {ModifyBookListItemComponent} from "./app/modify-book-list-item/modify-book-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {BookListItemComponent} from "./app/book-list-item/book-list-item.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const routes: Routes = [
    {path:'', redirectTo: '/books', pathMatch: 'full'}, //default route
    { path: 'books', component: BookListComponent },
    {path: 'books/:isbn', loadComponent: () => import('./app/book-list-item/book-list-item.component').then(m => m.BookListItemComponent)},
    {path: 'modify-book/:isbn' ,loadComponent: () => import('./app/modify-book-list-item/modify-book-list-item.component').then(m => m.ModifyBookListItemComponent), pathMatch: 'full'},
    {path: 'modify-book', loadComponent:()=>import('./app/modify-book-list-item/modify-book-list-item.component').then(m=>m.ModifyBookListItemComponent)},
    {path: '**', loadComponent: ()=>import('./app/page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent)}
    ];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimationsAsync()]
}).then(r => console.log('Bootstrap successful'));
