var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LibraryReportTookAwayBookComponent } from './library-reportTookAwayBook/library-reportTookAwayBook.component';
import { LibraryReportReturnBookComponent } from './library-reportReturnBook/library-reportReturnBook.component';
import { LibraryTookAwayBookComponent } from './library-tookAwayBook/library-tookAwayBook.component';
import { LibraryReturnBookComponent } from './library-returnBook/library-returnBook.component';
import { LibraryService } from './shared/library.service';
import { LibraryComponent } from './library/library.component';
var routes = [
    { path: "library", component: LibraryComponent },
    { path: "library/tookAwayBook", component: LibraryTookAwayBookComponent },
    { path: "library/returnBook", component: LibraryReturnBookComponent },
    { path: "library/reportTookAwayBook", component: LibraryReportTookAwayBookComponent },
    { path: "library/reportReturnBook", component: LibraryReportReturnBookComponent }
];
var LibraryRoutingModule = /** @class */ (function () {
    function LibraryRoutingModule() {
    }
    LibraryRoutingModule = __decorate([
        NgModule({
            providers: [LibraryService],
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], LibraryRoutingModule);
    return LibraryRoutingModule;
}());
export { LibraryRoutingModule };
//# sourceMappingURL=library-routing.module.js.map