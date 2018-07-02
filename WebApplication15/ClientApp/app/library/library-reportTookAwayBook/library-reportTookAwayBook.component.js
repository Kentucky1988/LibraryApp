var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LibraryService } from '../shared/library.service';
var LibraryReportTookAwayBookComponent = /** @class */ (function () {
    function LibraryReportTookAwayBookComponent(service) {
        this.service = service;
    }
    LibraryReportTookAwayBookComponent.prototype.ngOnInit = function () {
        this.loadBooks();
    };
    LibraryReportTookAwayBookComponent.prototype.loadBooks = function () {
        var _this = this;
        this.service.booksNotInLibrary()
            .subscribe(function (data) { return _this.books = data; });
    };
    LibraryReportTookAwayBookComponent.prototype.downloadReport = function (books) {
        this.service.downloadReport(this.books, 'ReportTookAwayBooks.xlsx', 'FileReportTookAwayBooks');
    };
    LibraryReportTookAwayBookComponent = __decorate([
        Component({
            selector: 'app-library-reportTookAwayBook',
            templateUrl: './library-reportTookAwayBook.component.html'
        }),
        __metadata("design:paramtypes", [LibraryService])
    ], LibraryReportTookAwayBookComponent);
    return LibraryReportTookAwayBookComponent;
}());
export { LibraryReportTookAwayBookComponent };
//# sourceMappingURL=library-reportTookAwayBook.component.js.map