import { Component, Input } from '@angular/core';
import { Book } from "../models/book";
import { CommonModule } from "@angular/common";
import { NgOptimizedImage } from '@angular/common';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent {
  @Input() contentItem!: Book;
  @Input() isEven?: boolean;
  bookList: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooksObservable().subscribe({
      next: (data: Book[]) => this.bookList = data,
      error:err => console.error("Error fetching Books",
        err),
      complete:() => console.log("Book data fetch complete!")
    });
  }
}
