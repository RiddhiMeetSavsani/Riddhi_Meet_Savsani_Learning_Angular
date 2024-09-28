import {Component, Input} from '@angular/core';
import { Book} from "../models/book";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './book-list-item.component.html',
  styleUrl: './book-list-item.component.css'
})
export class BookListItemComponent {
  @Input() contentItem!: Book;  // The input property that accepts a Book object
  @Input() isEven?:boolean;
}
