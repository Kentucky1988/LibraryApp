import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { MovementBooks, BookReading } from './library.model';


@Injectable()
export class LibraryService {

    private url = "/LibraryWork";

    constructor(private http: HttpClient, private router: Router) { }

    createNoute(note: MovementBooks) {
        return this.http.post(this.url + '/' + 'AddNote', note);
    }

    changeNote(note: MovementBooks) {
        return this.http.put(this.url + '/' + 'ChangeNote', note);
    }

    bookInLibrary() {
        return this.http.get(this.url + '/' + 'BooksInLibrary');
    }

    booksNotInLibrary() {
        return this.http.get(this.url + '/' + 'BooksNotInLibrary');
    }

    readersBooks(id: number) {
        return this.http.get(this.url + '/' + 'ReadersBooks' + '/' + id);
    }

    downloadReport(list: Object[], fileName: string, nameActionMethod: string) {
        return this.http.post(this.url + '/' + nameActionMethod, list, { responseType: 'blob' }).subscribe(blob => {
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();

            this.router.navigate(["library"]);
        });
    }
}