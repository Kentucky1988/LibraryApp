import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from './books/books.module';
import { ClientModule } from './clients/clients.module';
import { LibraryModule } from './library/library.module';

@NgModule({
    imports: [ 
        AppRoutingModule,
        BooksModule,
        ClientModule,
        LibraryModule
    ],
    declarations: [
        AppComponent       
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }




