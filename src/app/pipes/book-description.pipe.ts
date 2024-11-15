import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "../models/book";

@Pipe({
  name: 'bookDescription',
  standalone: true
})
export class BookDescriptionPipe implements PipeTransform {

  transform(book: Book): string {
    return `${book.title} (${book.genre})`;
  }

}
