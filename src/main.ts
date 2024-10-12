import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {BookListComponent} from "./app/book-list/book-list.component";
import {BookListItemComponent} from "./app/book-list-item/book-list-item.component";



const routes: Routes = [
  {path:'', redirectTo: '/books', pathMatch: 'full'}, //default route
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookListItemComponent },
];
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));
