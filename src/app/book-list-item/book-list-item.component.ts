import { Component, Input } from '@angular/core';
import { Book } from "../models/book";
import { CommonModule } from "@angular/common";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class BookListItemComponent {
  @Input() contentItem!: Book;  // The input property that accepts a Book object
  @Input() isEven?: boolean;     // Optional input to determine if the item is even
}
