import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Array<any> = [
    // {id:1,title:"War and Peace",pageCount:300,ISBN:"3645364",author:"Tolstoy",genre:"novel",imgPath:"../assets/images/crimeAndPunishment.jpg",quantity:"3"},
    // {id:2,title:"crime and Punishment",pageCount:300,ISBN:"3623794",author:"Dostoevsky",genre:"novel",imgPath:"",quantity:"7"},
    // {id:3,title:"white",pageCount:170,ISBN:"3647661",author:"Arthur",genre:"war",imgPath:"",quantity:"10"},
    // {id:4,title:"white",pageCount:170,ISBN:"3647661",author:"Arthur",genre:"war",imgPath:"",quantity:"10"},
    // {id:5,title:"white",pageCount:170,ISBN:"3647661",author:"Arthur",genre:"war",imgPath:"",quantity:"10"},
    // {id:6,title:"white",pageCount:170,ISBN:"3647661",author:"Arthur",genre:"war",imgPath:"",quantity:"10"},
    // {id:7,title:"white",pageCount:170,ISBN:"3647661",author:"Arthur",genre:"war",imgPath:"",quantity:"10"},
    // {id:8,title:"white",pageCount:170,ISBN:"3647661",author:"Arthur",genre:"war",imgPath:"",quantity:"10"},
  ]


  constructor(private httpClient: HttpClient) { }

  booksStream = new BehaviorSubject({
    books: this.books
  });


  // getBooks(){
  //   return this.books;
  // }

  getBooks() {
    this.httpClient.get("http://localhost:8080/books")
      .subscribe({
        next: (response: any) => {
          this.books = response;
          this.booksStream.next({
            books: this.books
          })
        }
      })
  }
}
