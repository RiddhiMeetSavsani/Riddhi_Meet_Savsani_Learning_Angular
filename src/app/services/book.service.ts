import { Injectable } from '@angular/core';
import {catchError, map, Observable, of, throwError} from 'rxjs';
import { Book } from '../models/book';
import {bookList3} from "../data/mock-book-data";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'api/books'; //url to web api
  private books: Book[] = bookList3;

  constructor(private http: HttpClient) { }//DI http

  //CRUD operations using HTTP Requests
  //All operations we need are:
  // Get, post, put, delete
  getBooksObservable(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // getBookById(isbn: number): Observable<Book> {
  //   return this.http.get<Book>(`${this.apiUrl}//${isbn}`).pipe(catchError(this.handleError)); //return a single student
  // }
  getBookById(isbn: number): Observable<Book | undefined> {
    return this.http.get<Book[]>(`${this.apiUrl}//${isbn}`).pipe(
      map(books => books.find(book => book.isbn === isbn))
    );
  }

  addBook(newBook: Book): Observable<Book> {
    newBook.isbn = this.generateNewId();
    return this.http.post<Book>(this.apiUrl, newBook).pipe(
      map(book => {
        this.books.push(book);
        return book;
      }),
      catchError(this.handleError)
    );
  }

  // addBook(newBook: Book): Observable<Book> {
  //   newBook.isbn = this.generateNewId();
  //   return this.http.post<Book>(this.apiUrl, newBook).pipe(catchError(this.handleError));
  // }


  // updateBook(updatedBook: Book): Observable<Book | undefined> {
  //   const url = `${this.apiUrl}/${updatedBook.isbn}`;
  //   return this.http.put<Book>(url, updatedBook).pipe(catchError(this.handleError));
  // }

  updateBook(updatedBook: Book): Observable<Book | undefined> {
    return this.http.put<Book>(`${this.apiUrl}//${updatedBook.isbn}`, updatedBook).pipe(
      map(book => {
        const index = this.books.findIndex(b => b.isbn === updatedBook.isbn);
        if (index !== -1) {
          this.books[index] = updatedBook;
        }
        return book;
      }),
      catchError(() => of(undefined))
    );
  }



  deleteBook(isbn: number): Observable<{}> {
    const url = `${this.apiUrl}/${isbn}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewId(): number{
    return this.books.length > 0 ? Math.max(...this.books.map(book=>book.isbn))+ 1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }

}
