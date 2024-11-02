import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Book} from "../models/book";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-modify-book-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-book-list-item.component.html',
  styleUrl: './modify-book-list-item.component.css'
})
export class ModifyBookListItemComponent implements OnInit{
  bookForm : FormGroup;
  book: Book | undefined;

  constructor(
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private bookService : BookService,
    private router: Router
  ) {
    this.bookForm=this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      isbn: ['', Validators.required],
      genre: [''],
      availability:[true],
      price: ['', Validators.required],
      publishedYear:[''],
      imageUrl:['../assets/pngimg3.png']
    });
  }

  ngOnInit() :void{
    const isbn = this.route.snapshot.paramMap.get('isbn');
    if(isbn){
      this.bookService.getBookById(+isbn).subscribe(book=>{
        if(book){
          this.book=book;

          this.bookForm.patchValue(book);
        }
      });
    }
  }

  onSubmit():void{
    const book: Book = this.bookForm.value;

    if(this.book?.isbn){
      this.bookService.updateBook(book);
    }else{
      const newIsbn = this.bookService.generateNewId();
      book.isbn=newIsbn;
      this.bookService.addBook(book);
    }

    this.router.navigate(['/books']);

  }

  // onSubmit(): void {
  //   const book: Book = this.bookForm.value;
  //
  //   console.log("Form Data on Submit:", book); // Debugging line to inspect form data
  //
  //   if (this.book?.isbn) {
  //     // For updating an existing book
  //     console.log("Updating book with ISBN:", book.isbn);
  //     this.bookService.updateBook(book).subscribe(
  //       response => {
  //         console.log("Update Success:", response);
  //         this.router.navigate(['/books']);
  //       },
  //       error => console.error("Update Error:", error)
  //     );
  //   } else {
  //     // For adding a new book
  //     const newIsbn = this.bookService.generateNewId();
  //     book.isbn = newIsbn;
  //     console.log("Adding new book with ISBN:", newIsbn);
  //     this.bookService.addBook(book).subscribe(
  //       response => {
  //         console.log("Add Success:", response);
  //         this.router.navigate(['/books']);
  //       },
  //       error => console.error("Add Error:", error)
  //     );
  //   }
  // }


  // onDelete(): void{
  //   const isbn = this.bookForm.get('isbn')?.value;
  //   if(isbn){
  //     this.bookService.deleteBook(isbn);
  //     this.router.navigate(['/books']);
  //   }
  // }

  navigateToBookList():void{
    this.router.navigate(['/books']);
  }
}
