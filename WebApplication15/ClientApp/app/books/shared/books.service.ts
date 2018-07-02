import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';

@Injectable()
export class BookService {

    private url = "/api/Books";

    constructor(private http: HttpClient) { }

    getBooks() {
        return this.http.get(this.url);
    }

    getBook(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createBook(product: Book) {
        return this.http.post(this.url, product);
    }

    updateBook(product: Book) {

        return this.http.put(this.url + '/' + product.id, product);
    }

    deleteBook(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}