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
import { BookService } from '../shared/books.service';
import { Book } from '../shared/book.model';
var BooksCreateComponent = /** @class */ (function () {
    function BooksCreateComponent(service, router) {
        this.service = service;
        this.router = router;
        this.book = new Book();
    }
    BooksCreateComponent.prototype.save = function () {
        var _this = this;
        this.service.createBook(this.book).subscribe(function (data) { return _this.router.navigateByUrl("/"); });
        ;
    };
    BooksCreateComponent = __decorate([
        Component({
            selector: 'app-books-create',
            templateUrl: './books-create.component.html'
        }),
        __metadata("design:paramtypes", [BookService, Router])
    ], BooksCreateComponent);
    return BooksCreateComponent;
}());
export { BooksCreateComponent };
//# sourceMappingURL=books-create.component.js.map