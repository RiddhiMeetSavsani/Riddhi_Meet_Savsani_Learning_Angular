import { Pipe, PipeTransform } from '@angular/core';
import {Book} from "../models/book";

@Pipe({
  name: 'availabilityStyle',
  standalone: true
})
export class AvailabilityStylePipe implements PipeTransform {

  transform(book: Book): { color: string; fontWeight: string; text: string } {
    return {
      color: book.availability ? 'green' : 'red',
      fontWeight: book.availability ? 'bold' : 'normal',
      text: book.availability ? 'Available' : 'Out of Stock',
    };
  }

}
