import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';
import {bookList3} from "../data/mock-book-data";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = bookList3;

  constructor() { }

  getBooksObservable() : Observable<Book[]> {
    return of(this.books);
  }

  getBookById(isbn: number): Observable<Book | undefined> {
    const book = this.books.find(book => book.isbn === isbn);
    return of(book);
  }

  addBook(newBook: Book): Observable<Book> {
    console.log("Adding new book:", newBook);
    this.books.push(newBook);
    return of(newBook);
  }

  updateBook(updatedBook: Book): Observable<Book | undefined> {
    const index = this.books.findIndex(book => book.isbn === updatedBook.isbn);
    if (index > -1) {
      this.books[index] = updatedBook;
      return of(updatedBook);
    }
    return of(undefined);
  }

  deleteBook(isbn: number): void {
    this.books = this.books.filter(book=> book.isbn!==isbn);
  }

  // deleteBook(isbn: number): Observable<void> {
  //   this.books = this.books.filter(book => book.isbn !== isbn);
  //   return of();
  // }

  generateNewId(): number{
    return this.books.length > 0 ? Math.max(...this.books.map(book=>book.isbn))+ 1 : 1;
  }

}
