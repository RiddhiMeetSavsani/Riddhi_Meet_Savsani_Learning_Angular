import {Book} from "../models/book";


export const bookList3:Book[]=[
  {
    title: 'Book31',
    author: "Author31",
    genre: "Genre31",
    publishedYear: 2020,
    isbn: 31111,
    price: 100.89545,
    availability: true,
    imageUrl:"../assets/pngimg1.png",
    publishedDate : new Date(2020, 5, 15)
  },

  {
    title: 'Book32',
    author: "Author32",
    genre: "Genre32",
    publishedYear: 2019,
    isbn: 32222,
    price: 150.3443,
    availability: false,
    imageUrl:"../assets/pngimg2.png",
    publishedDate:new Date(2019, 10, 22)
  },

  {
    title: 'Book33',
    author: "Author33",
    genre: "Genre33",
    publishedYear: 2021,
    isbn: 33333,
    price: 120.1234,
    availability: true,
    imageUrl:"../assets/pngimg3.png",
    publishedDate: new Date(2021, 2, 10)
  },

  {
    title: 'Book34',
    author: "Author34",
    genre: "Genre34",
    publishedYear: 2018,
    isbn: 34444,
    price: 90.34343,
    availability: false,
    imageUrl:"../assets/pngimg4.png",
    publishedDate: new Date(2018, 7, 30)
  },
];
