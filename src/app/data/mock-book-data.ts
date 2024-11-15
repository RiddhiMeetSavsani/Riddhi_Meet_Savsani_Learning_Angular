import {Book} from "../models/book";


export const bookList3:Book[]=[
  {
    title: 'Dune',
    author: "Frank Herbert",
    genre: "Sci-Fi",
    publishedYear: 2020,
    isbn: 31111,
    price: 9.99,
    availability: true,
    imageUrl:"../assets/pngimg1.png",
    publishedDate : new Date(2020, 5, 15)
  },

  {
    title: '1984',
    author: "George Orwell",
    genre: "Dystopia",
    publishedYear: 2019,
    isbn: 32222,
    price: 150.3443,
    availability: false,
    imageUrl:"../assets/pngimg2.png",
    publishedDate:new Date(2019, 10, 22)
  },

  {
    title: 'It',
    author: "Stephen King",
    genre: "Horror",
    publishedYear: 2021,
    isbn: 33333,
    price: 120.1234,
    availability: true,
    imageUrl:"../assets/pngimg3.png",
    publishedDate: new Date(2021, 2, 10)
  },

  {
    title: 'Emma',
    author: "Jane Austen",
    genre: "Romance",
    publishedYear: 2018,
    isbn: 34444,
    price: 90.34343,
    availability: false,
    imageUrl:"../assets/pngimg4.png",
    publishedDate: new Date(2018, 7, 30)
  },
];
