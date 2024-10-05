import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Book} from "../models/book";
import {BookListItemComponent} from "../book-list-item/book-list-item.component";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookListItemComponent, NgOptimizedImage],// Import the child component
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  encapsulation: ViewEncapsulation.None
})
export class BookListComponent {
  bookList: Book[] = [];

  //For Assignment-3 creating new array

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooksObservable().subscribe({
      next: (data: Book[]) => this.bookList = data,
      error:err => console.error("Error fetching Books",
        err),
      complete:() => console.log("Book data fetch complete!")
    });
  }

  @Input() onBookSelect!: (book: Book) => void;
  onBookClick(book: Book) {
    this.onBookSelect(book);
  }
}
