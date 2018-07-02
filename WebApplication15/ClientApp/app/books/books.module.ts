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

@NgModule({ 
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

export class BooksModule { }

