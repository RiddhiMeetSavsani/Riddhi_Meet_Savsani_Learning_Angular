import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import {Book} from './models/book';
import {BookListComponent} from "./book-list/book-list.component";
import {BookListItemComponent} from "./book-list-item/book-list-item.component";
import { BookService } from './services/book.service';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule,BookListComponent, BookListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Riddhi-Meet-Savsani-Learning-Angular';
    /**book1: Book = {
    title: 'Book1',
    author: "Author1",
    genre: "Genre1",
    publishedYear: 2020,
    isbn: 1111,
    price: 100,
    availability: true,

  };

    book2: Book = {
    title: 'Book2',
    author: "Author2",
    genre: "Genre2",
    publishedYear: 2019,
    isbn: 2222,
    price: 150,
    availability: false,

  };

    book3: Book = {
    title: 'Book3',
    author: "Author3",
    genre: "Genre3",
    publishedYear: 2021,
    isbn: 3333,
    price: 120,
    availability: true,

  };

    book4: Book = {
    title: 'Book4',
    author: "Author4",
    genre: "Genre4",
    publishedYear: 2018,
    isbn: 4444,
    price: 90,
    availability: false,

  };

    book5: Book = {
    title: 'Book5',
    author: "Author5",
    genre: "Genre5",
    publishedYear: 2022,
    isbn: 5555,
    price: 200,
    availability: true,

  };

    book6: Book = {
    title: 'Book6',
    author: "Author6",
    genre: "Genre6",
    publishedYear: 2017,
    isbn: 6666,
    price: 80,
    availability: true,

  };

    bookList:Book[]=[this.book1,this.book2,this.book3,this.book4,this.book5,this.book6];
**/

    book?: Book;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBookById(31111).subscribe({
      next: (data: Book | undefined) => {
        if (data) {
          this.book = data;
        } else {
          console.error('Book not found');
        }
      },
      error:err => console.error("Error fetching Books", err),
      complete:() => console.log("Book data fetch complete!")
    });
  }

  onBookSelected(selectedBook: Book) {
    this.book = selectedBook; // Update the selected book
  }

}

