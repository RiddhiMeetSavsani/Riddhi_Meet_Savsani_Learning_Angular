import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../models/book';
import {bookList3} from "../data/mock-book-data";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = bookList3;

  getBooksObservable() : Observable<Book[]> {
    return of(this.books);
  }

  getBookById(isbn: number): Observable<Book | undefined> {
    const book = this.books.find(book => book.isbn === isbn);
    return of(book);
  }

  addBook(newBook: Book): Observable<Book[]> {
    this.books.push(newBook);
    return of(this.books);
  }

  updateBook(updatedBook: Book): Observable<Book[]> {
    const index = this.books.findIndex(book => book.isbn === updatedBook.isbn);
    if (index !== -1) {
      this.books[index] = updatedBook;
    }
    return of(this.books);
  }

  deleteBook(isbn: number): Observable<Book | undefined> {
    const index = this.books.findIndex(book => book.isbn === isbn);
    if (index !== -1) {
      const removedBook = this.books .splice(index, 1)[0];
      return of(removedBook);
    }
    return of(undefined);
  }
  constructor() { }
}
