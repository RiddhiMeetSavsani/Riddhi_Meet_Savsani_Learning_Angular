import {Component, Input, NgIterable, ViewEncapsulation} from '@angular/core';
import { Book } from "../models/book";
import { BookListItemComponent } from "../book-list-item/book-list-item.component";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { BookService } from '../services/book.service';
import { Router, RouterLink } from "@angular/router";
import {BookDescriptionPipe} from "../pipes/book-description.pipe";
import {AvailabilityStylePipe} from "../pipes/availability-style.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {TooltipDirective} from "../directives/tooltip.directive";
import {MatTable, MatTableModule} from "@angular/material/table";
import {MatButtonToggle, MatButtonToggleGroup, MatButtonToggleModule} from "@angular/material/button-toggle";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild, AfterViewInit } from '@angular/core';
import {MatTooltip, MatTooltipModule} from "@angular/material/tooltip";
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, BookListItemComponent, NgOptimizedImage, RouterLink, BookDescriptionPipe, AvailabilityStylePipe, HoverHighlightDirective, TooltipDirective, MatTableModule, MatButtonToggleGroup, MatButtonToggleModule, MatPaginatorModule, MatTooltipModule],
  templateUrl:'./book-list.component.html',
  styleUrls: ['./book-list.component.css'], // Correct the styleUrls property name
  encapsulation: ViewEncapsulation.None
})
export class BookListComponent {
  bookList:Book[]=[];
  dataSource = new MatTableDataSource<Book>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  refreshBookList(): void {
    this.bookService.getBooksObservable().subscribe({
      next: (data: Book[]) => {this.bookList = data; this.dataSource.data = data;},
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
    this.dataSource.data = this.dataSource.data.filter(book=> book.isbn!==isbn);
    //this.router.navigate(['/books']);
  }


//     deleteBook(isbn: number): void {
//   this.books = this.books.filter(book=> book.isbn!==isbn);
// }
  editBook(isbn: number, event : MouseEvent): void {
    event.stopPropagation();
    this.router.navigate(['/modify-book', isbn]);
  }

  protected readonly onclick = onclick;


}
