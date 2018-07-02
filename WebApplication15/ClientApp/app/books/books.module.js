var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './books-list/books-list.component';
import { BooksCreateComponent } from './books-create/books-create.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookRoutingModule } from './books-routing.module';
import { BookService } from './shared/books.service';
var BooksModule = /** @class */ (function () {
    function BooksModule() {
    }
    BooksModule = __decorate([
        NgModule({
            imports: [
                BookRoutingModule,
                FormsModule,
                BrowserModule,
                HttpClientModule
            ],
            declarations: [
                BookListComponent,
                BooksCreateComponent,
                BooksEditComponent,
                BookFormComponent
            ],
            providers: [BookService]
        })
    ], BooksModule);
    return BooksModule;
}());
export { BooksModule };
//# sourceMappingURL=books.module.js.map