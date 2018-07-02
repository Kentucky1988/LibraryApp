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
import { LibraryReportTookAwayBookComponent } from './library-reportTookAwayBook/library-reportTookAwayBook.component';
import { LibraryReportReturnBookComponent } from './library-reportReturnBook/library-reportReturnBook.component';
import { LibraryReturnBookComponent } from './library-returnBook/library-returnBook.component';
import { LibraryTookAwayBookComponent } from './library-tookAwayBook/library-tookAwayBook.component';
import { LibraryRoutingModule } from './library-routing.module';
import { LibraryService } from './shared/library.service';
import { LibraryComponent } from './library/library.component';
var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = __decorate([
        NgModule({
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
    ], LibraryModule);
    return LibraryModule;
}());
export { LibraryModule };
//# sourceMappingURL=library.module.js.map