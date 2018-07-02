var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../shared/book.model';
import { BookService } from '../shared/books.service';
var BookListComponent = /** @class */ (function () {
    function BookListComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.book = new Book();
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.loadBooks();
    };
    BookListComponent.prototype.loadBooks = function () {
        var _this = this;
        this.dataService.getBooks()
            .subscribe(function (data) { return _this.books = data; });
    };
    BookListComponent.prototype.editBook = function (book) {
        this.router.navigate(["books", "edit", book.id]);
    };
    BookListComponent.prototype.createBook = function () {
        this.router.navigate(["books", "create"]);
    };
    BookListComponent.prototype.delete = function (book) {
        var _this = this;
        this.dataService.deleteBook(book.id)
            .subscribe(function (data) { return _this.loadBooks(); });
    };
    BookListComponent = __decorate([
        Component({
            selector: 'book-lessons-list',
            templateUrl: './books-list.component.html'
        }),
        __metadata("design:paramtypes", [BookService, Router])
    ], BookListComponent);
    return BookListComponent;
}());
export { BookListComponent };
//# sourceMappingURL=books-list.component.js.map