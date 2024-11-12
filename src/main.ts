import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {BookListComponent} from "./app/book-list/book-list.component";
import {ModifyBookListItemComponent} from "./app/modify-book-list-item/modify-book-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {BookListItemComponent} from "./app/book-list-item/book-list-item.component";
import {provideHttpClient} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataServices} from "./app/services/in-memory-data.services";


const routes: Routes = [
  {path:'', redirectTo: '/books', pathMatch: 'full'}, //default route
  { path: 'books', component: BookListComponent },
  { path: 'books/:isbn', component: BookListItemComponent },
  {path: 'modify-book/:isbn', component: ModifyBookListItemComponent},
  {path: 'modify-book', component: ModifyBookListItemComponent},
  {path: '**', component: PageNotFoundComponent}
];
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataServices, { delay: 1000 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
