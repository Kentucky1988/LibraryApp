import { Component } from '@angular/core';
import { LibraryService } from '../shared/library.service';
import { BookReading } from '../shared/library.model';

@Component({
    selector: 'app-library-reportTookAwayBook',
    templateUrl: './library-reportTookAwayBook.component.html'
})

export class LibraryReportTookAwayBookComponent {

    books: BookReading[];

    constructor(private service: LibraryService) { }

    ngOnInit() {
        this.loadBooks()
    }

    loadBooks() {
        this.service.booksNotInLibrary()
            .subscribe((data: BookReading[]) => this.books = data);
    }

    downloadReport(books: BookReading[]) {
        this.service.downloadReport(this.books, 'ReportTookAwayBooks.xlsx', 'FileReportTookAwayBooks');
    }
}