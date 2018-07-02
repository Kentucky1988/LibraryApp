import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from '../shared/books.service';
import { Book } from '../shared/book.model';

@Component({
    selector: 'app-books-create',
    templateUrl: './books-create.component.html'
})
export class BooksCreateComponent {

    book: Book = new Book();
    constructor(private service: BookService, private router: Router) { }

    save() {
        this.service.createBook(this.book).subscribe(data => this.router.navigateByUrl("/"));;
    }
}

