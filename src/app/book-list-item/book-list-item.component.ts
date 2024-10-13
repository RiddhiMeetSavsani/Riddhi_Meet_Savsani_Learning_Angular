
import { Component, Input } from '@angular/core';
import { Book } from "../models/book";
import { CommonModule } from "@angular/common";
import { NgOptimizedImage } from '@angular/common';
import {BookService} from "../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-list-item',
  standalone: true,
  imports: [ CommonModule, NgOptimizedImage],
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent {
  @Input() contentItem?: Book;
  @Input() isEven?: boolean;

  book:Book|undefined
  bookList:Book[]=[];
  currentIndex:number=0;

  constructor(
    private route:ActivatedRoute,
    private bookService:BookService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.bookService.getBooksObservable().subscribe(bks => {
      this.bookList = bks;

      this.route.paramMap.subscribe(params => {
        const isbn = Number(params.get('isbn'));

        if (isbn) {
          this.currentIndex = this.bookList.findIndex(user => user.isbn === isbn);
          this.book = this.bookList[this.currentIndex];
        }

      });


    });
  }

}
