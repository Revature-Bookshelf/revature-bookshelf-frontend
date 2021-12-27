import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Array<any> = []

  constructor(private booksService: BooksService) { }


  ngOnInit(): void {

    this.booksService.getAllBooks().subscribe({
      next: (response: any) => {
        this.books = response
      }
    })

    this.booksService.getAvailableBooks().subscribe({
      next: (response: any) => {
        this.books = response
      }
    })
  }


}

