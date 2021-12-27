import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Array<any> = []

  constructor(private booksService: BooksService, private router: Router) {
  }


  ngOnInit(): void {
    if (this.router.url == "/books") {
      this.booksService.getAllBooks().subscribe({
        next: (response: any) => {
          this.books = response
        }
      })
    } else {
      this.booksService.getAvailableBooks().subscribe({
        next: (response: any) => {
          this.books = response
        }
      })
    }





  }


}

