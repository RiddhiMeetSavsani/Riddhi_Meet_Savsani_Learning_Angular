import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Book } from "../models/book";
import { BookListItemComponent } from "../book-list-item/book-list-item.component";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { BookService } from '../services/book.service';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookListItemComponent, NgOptimizedImage, RouterLink], // Import the child component
  templateUrl:'./book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookListComponent {
  bookList:Book[]=[];
  error: string | null = null;


  constructor (private bookService: BookService, private router: Router){
    //this constructor is primarily used for dependency injection
  }


  // ngOnInit(){
  //   //This lifecycle hook is a good place to fetch and init our data
  //   this.bookService.getBooksObservable().subscribe({
  //     next: (data: Book[]) => this.bookList = data,
  //     error:err => console.error("Error fetching Book", err),
  //     complete:() => console.log("Book data fetch complete!")
  //   })
  //
  // }

  ngOnInit() {
    this.refreshBookList(); // Call this method on initialization
  }

  refreshBookList(): void {
    this.bookService.getBooksObservable().subscribe({
      next: (data: Book[]) => this.bookList = data,
      error: err => console.error("Error fetching Book", err),
      complete: () => console.log("Book data fetch complete!")
    });
  }

  selectedBook?: Book;
  selectBook(book: Book): void {
    this.selectedBook = book;
  }

  // onDelete(): void{
  //   const isbn = this.selectedBook?.isbn;
  //   if(isbn){
  //     this.bookService.deleteBook(isbn);
  //     this.router.navigate(['/books']);
  //   }
  // }

  onDelete(isbn: number):void{
    this.bookService.deleteBook(isbn);
    this.bookList = this.bookList.filter(book=> book.isbn!==isbn);
    this.router.navigate(['/books']);
  }


//     deleteBook(isbn: number): void {
//   this.books = this.books.filter(book=> book.isbn!==isbn);
// }
  editBook(isbn: number): void {
    this.router.navigate(['/modify-book', isbn]);
  }

}
