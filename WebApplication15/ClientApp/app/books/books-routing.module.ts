import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookService } from './shared/books.service';
import { BookListComponent } from './books-list/books-list.component';
import { BooksCreateComponent } from './books-create/books-create.component';
import { BooksEditComponent } from './books-edit/books-edit.component';

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "books" },
    { path: "books", component: BookListComponent },
    { path: "books/create", component: BooksCreateComponent },
    { path: "books/edit/:id", component: BooksEditComponent } 
]

@NgModule({
    providers: [BookService],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class BookRoutingModule { }




