import {Component, ViewEncapsulation} from '@angular/core';
import {Book} from "../models/book";
import {BookListItemComponent} from "../book-list-item/book-list-item.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookListItemComponent, NgOptimizedImage],// Import the child component
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  encapsulation: ViewEncapsulation.None
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
        availability: true,
        imageUrl:'https://cdn-icons-png.freepik.com/512/11117/11117192.png'
      },

      {
        title: 'Book32',
        author: "Author32",
        genre: "Genre32",
        publishedYear: 2019,
        isbn: 32222,
        price: 150,
        availability: false,
        imageUrl:'https://images.freeimages.com/image/previews/1ac/pink-book-icon-png-5694164.png'
      },

       {
        title: 'Book33',
        author: "Author33",
        genre: "Genre33",
        publishedYear: 2021,
        isbn: 33333,
        price: 120,
        availability: true,
         imageUrl:'https://cdn-icons-png.flaticon.com/512/201/201556.png'
      },

      {
        title: 'Book34',
        author: "Author34",
        genre: "Genre34",
        publishedYear: 2018,
        isbn: 34444,
        price: 90,
        availability: false,
        imageUrl:'https://cdn-icons-png.flaticon.com/512/2232/2232688.png'
      },
  ];

  constructor() {
    // Log the bookList3 to the console
    console.log(this.bookList3);
  }
}
