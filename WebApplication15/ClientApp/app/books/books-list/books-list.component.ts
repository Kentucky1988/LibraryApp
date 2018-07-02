import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../shared/book.model';
import { BookService } from '../shared/books.service';

@Component({
    selector: 'book-lessons-list',
    templateUrl: './books-list.component.html'
})

export class BookListComponent  implements OnInit {

    book: Book = new Book();  
    books: Book[];  

    constructor(private dataService: BookService, private router: Router) { }

    ngOnInit() {
        this.loadBooks();   
    }
    
    loadBooks() {
        this.dataService.getBooks()
            .subscribe((data: Book[]) => this.books = data);
    }

    editBook(book: Book) {
        this.router.navigate(["books", "edit", book.id]);
    }

    createBook() {
        this.router.navigate(["books", "create"]);
    }

    delete(book: Book) {
        this.dataService.deleteBook(book.id)
            .subscribe(data => this.loadBooks());
    }
}


