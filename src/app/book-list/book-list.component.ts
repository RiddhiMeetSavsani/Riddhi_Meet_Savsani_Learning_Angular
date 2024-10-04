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



  constructor() {
    // Log the bookList3 to the console
    //console.log(this.bookList3);
  }
}
