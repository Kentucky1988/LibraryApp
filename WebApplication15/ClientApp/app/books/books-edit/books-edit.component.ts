import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BookService } from '../shared/books.service';
import { Book } from '../shared/book.model';

@Component({
    selector: 'app-books-edit',
    templateUrl: './books-edit.component.html'
})

export class BooksEditComponent implements OnInit {

    book: Book;

    constructor(private service: BookService, private router: Router, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        let id: number = +this.activeRoute.snapshot.paramMap.get("id");
        this.service.getBook(id).subscribe((data: Book) => { this.book = data; });
    }

    save() {
        this.service.updateBook(this.book).subscribe(data => this.router.navigateByUrl("/"));
    }
}

