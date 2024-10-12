import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {BookListComponent} from "./app/book-list/book-list.component";
import {BookListItemComponent} from "./app/book-list-item/book-list-item.component";
import {ModifyBookListItemComponent} from "./app/modify-book-list-item/modify-book-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";



const routes: Routes = [
  {path:'', redirectTo: '/books', pathMatch: 'full'}, //default route
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookListItemComponent },
  {path: 'modify-book', component: ModifyBookListItemComponent},
  {path: '**', component: PageNotFoundComponent}
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
