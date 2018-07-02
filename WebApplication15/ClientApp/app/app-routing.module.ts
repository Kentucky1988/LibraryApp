import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './books/books-list/books-list.component';
import { ClientListComponent } from './clients/clients-list/clients-list.component';
import { LibraryTookAwayBookComponent } from './library/library-tookAwayBook/library-tookAwayBook.component';
import { LibraryComponent } from './library/library/library.component';

const routes: Routes = [
    //{ path: "", pathMatch: "full", redirectTo: "books" },
    { path: "books", component: BookListComponent },
    { path: "clients", component: ClientListComponent },
    { path: "library", component: LibraryComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }




