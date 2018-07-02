import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryReportTookAwayBookComponent } from './library-reportTookAwayBook/library-reportTookAwayBook.component';
import { LibraryReportReturnBookComponent } from './library-reportReturnBook/library-reportReturnBook.component';
import { LibraryTookAwayBookComponent } from './library-tookAwayBook/library-tookAwayBook.component';
import { LibraryReturnBookComponent } from './library-returnBook/library-returnBook.component';
import { LibraryService } from './shared/library.service';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
    { path: "library", component: LibraryComponent },
    { path: "library/tookAwayBook", component: LibraryTookAwayBookComponent },
    { path: "library/returnBook", component: LibraryReturnBookComponent },
    { path: "library/reportTookAwayBook", component: LibraryReportTookAwayBookComponent },
    { path: "library/reportReturnBook", component: LibraryReportReturnBookComponent }
]

@NgModule({
    providers: [LibraryService],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class  LibraryRoutingModule { }




