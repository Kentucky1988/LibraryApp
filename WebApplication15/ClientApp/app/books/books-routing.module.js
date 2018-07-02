var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookService } from './shared/books.service';
import { BookListComponent } from './books-list/books-list.component';
import { BooksCreateComponent } from './books-create/books-create.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
var routes = [
    { path: "", pathMatch: "full", redirectTo: "books" },
    { path: "books", component: BookListComponent },
    { path: "books/create", component: BooksCreateComponent },
    { path: "books/edit/:id", component: BooksEditComponent }
];
var BookRoutingModule = /** @class */ (function () {
    function BookRoutingModule() {
    }
    BookRoutingModule = __decorate([
        NgModule({
            providers: [BookService],
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], BookRoutingModule);
    return BookRoutingModule;
}());
export { BookRoutingModule };
//# sourceMappingURL=books-routing.module.js.map