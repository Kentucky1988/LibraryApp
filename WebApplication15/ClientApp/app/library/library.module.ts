import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { LibraryReportTookAwayBookComponent } from './library-reportTookAwayBook/library-reportTookAwayBook.component';
import { LibraryReportReturnBookComponent } from './library-reportReturnBook/library-reportReturnBook.component';
import { LibraryReturnBookComponent } from './library-returnBook/library-returnBook.component';
import { LibraryTookAwayBookComponent } from './library-tookAwayBook/library-tookAwayBook.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryService } from './shared/library.service';
import { LibraryComponent } from './library/library.component';

@NgModule({
    imports: [
        LibraryRoutingModule,
        FormsModule,
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        LibraryComponent,
        LibraryReportTookAwayBookComponent,
        LibraryReportReturnBookComponent,
        LibraryReturnBookComponent,
        LibraryTookAwayBookComponent
    ],
    providers: [LibraryService]
})

export class LibraryModule { }

