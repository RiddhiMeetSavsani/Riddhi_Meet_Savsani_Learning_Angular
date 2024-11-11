import { InMemoryDbService } from 'angular-in-memory-web-api';
import {Book} from "../models/book";

export class InMemoryDataServices implements InMemoryDbService {
//returns an object with a books property,
  // which is an array of Book objects
  createDb():{books: Book[]} {
    /*
    Inside the method, a constant array named books is defined,
    containing several User objects. Each Book object represents a
    book with properties such as isbn, authorname, Title,
     publishedYear, and isAvailable. For example, one of the Book objects is
     */
    const books: Book[] = [
      {
        title: 'Book31',
        author: "Author31",
        genre: "Genre31",
        publishedYear: 2020,
        isbn: 31111,
        price: 100,
        availability: true,
        imageUrl:"../assets/pngimg1.png"
      },

      {
        title: 'Book32',
        author: "Author32",
        genre: "Genre32",
        publishedYear: 2019,
        isbn: 32222,
        price: 150,
        availability: false,
        imageUrl:"../assets/pngimg2.png"
      },

      {
        title: 'Book33',
        author: "Author33",
        genre: "Genre33",
        publishedYear: 2021,
        isbn: 33333,
        price: 120,
        availability: true,
        imageUrl:"../assets/pngimg3.png"
      },

      {
        title: 'Book34',
        author: "Author34",
        genre: "Genre34",
        publishedYear: 2018,
        isbn: 34444,
        price: 90,
        availability: false,
        imageUrl:"../assets/pngimg4.png"
      }
      ];
    return { books };
  }
}
