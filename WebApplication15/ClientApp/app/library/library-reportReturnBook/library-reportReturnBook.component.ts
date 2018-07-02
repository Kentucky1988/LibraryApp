import { Component, Input } from '@angular/core';
import { Book } from '../shared/library.model';
import { LibraryService } from '../shared/library.service';

@Component({
    selector: 'app-library-reportReturnBook',
    templateUrl: './library-reportReturnBook.component.html'
})

export class LibraryReportReturnBookComponent {

    books: Book[];

    constructor(private service: LibraryService) { }

    ngOnInit() {
        this.loadBooks()
    }

    loadBooks() {
        this.service.bookInLibrary()
            .subscribe((data: Book[]) => this.books = data);
    }

    downloadReport(books: Book[]) {
        this.service.downloadReport(this.books, 'ReportReturnBooks.xlsx', 'FileReportReturnBooks');
    }
}