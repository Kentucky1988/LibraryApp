import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MovementBooks, Client, BookReading } from '../shared/library.model';
import { LibraryService } from '../shared/library.service';
import { ClientService } from '../../clients/shared/clients.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-library-returnBook',
    templateUrl: './library-returnBook.component.html'
})

export class LibraryReturnBookComponent {

    bookId: number;
    clientId: number;
    clients: Client[];
    books: BookReading[];
    dateReturn: Date;
    movementBooks: MovementBooks;

    constructor(
        private service: LibraryService,
        private serviceClients: ClientService,
        private router: Router,
        private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.loadClients()
    }

    loadClients() {
        this.serviceClients.getClients()
            .subscribe((data: Client[]) => this.clients = data);
    }

    loadBooks(clientId: number) {
        this.service.readersBooks(clientId)
            .subscribe((data: BookReading[]) => this.books = data);
    }

    save() {
        this.movementBooks = {
            'clientId': this.clientId,
            'bookId': this.bookId,
            'date': this.dateReturn
        };

        this.service.changeNote(this.movementBooks)
            .subscribe(data => this.router.navigate(["library"]),
                error => { this.router.navigate(["library"]) });
    }
}