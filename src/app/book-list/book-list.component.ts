import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Book} from "../models/book";
import {BookListItemComponent} from "../book-list-item/book-list-item.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import { BookService } from '../services/book.service';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookListItemComponent, NgOptimizedImage, RouterLink],// Import the child component
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BookListComponent {
  bookList:Book[]=[];


  constructor (private bookService: BookService){
    //this constructor is primarily used for dependency injection
  }


  ngOnInit(){
    //This lifecycle hook is a good place to fetch and init our data
    this.bookService.getBooksObservable().subscribe({
      next: (data: Book[]) => this.bookList = data,
      error:err => console.error("Error fetching Book", err),
      complete:() => console.log("Book data fetch complete!")
    })

  }
  selectedBook?: Book;
  selectBook(book: Book): void {
    this.selectedBook = book;
  }
  }
