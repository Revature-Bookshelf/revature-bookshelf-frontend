import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books:Array<any>=[]

  constructor(private booksService:BooksService) { }

  // ngOnInit(): void {
  //   this.books=this.booksService.getBooks()
  // }
  
    ngOnInit(): void {

      this.booksService.getBooks()

      this.booksService.booksStream
        .subscribe({
          next:(e:any)=>{
            let {action, books}=e;
            this.books=books;
          }
        })

  }
}
