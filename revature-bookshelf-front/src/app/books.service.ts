import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Array<any> = []


  constructor(private httpClient: HttpClient) { }

  booksStream = new BehaviorSubject({
    books: this.books
  });

  getBooks() {
    this.httpClient.get("http://localhost:8080/books")
      .subscribe({
        next: (response: any) => {
          this.booksStream.next({
            books: response
          })
        }
      })
  }
}
