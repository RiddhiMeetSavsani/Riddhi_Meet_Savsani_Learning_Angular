import { Component} from '@angular/core';
import {Book} from "../models/book";
import {BookListItemComponent} from "../book-list-item/book-list-item.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule,BookListItemComponent],// Import the child component
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  //For Assignment-3 creating new array

  bookList3:Book[]=[
     {
        title: 'Book31',
        author: "Author31",
        genre: "Genre31",
        publishedYear: 2020,
        isbn: 31111,
        price: 100,
        availability: true
      },

      {
        title: 'Book32',
        author: "Author32",
        genre: "Genre32",
        publishedYear: 2019,
        isbn: 32222,
        price: 150,
        availability: false
      },

       {
        title: 'Book33',
        author: "Author33",
        genre: "Genre33",
        publishedYear: 2021,
        isbn: 33333,
        price: 120,
        availability: true
      },

      {
        title: 'Book34',
        author: "Author34",
        genre: "Genre34",
        publishedYear: 2018,
        isbn: 34444,
        price: 90,
        availability: false
      },

  ];
}
