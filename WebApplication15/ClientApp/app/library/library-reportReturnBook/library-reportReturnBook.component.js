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
var LibraryReportReturnBookComponent = /** @class */ (function () {
    function LibraryReportReturnBookComponent(service) {
        this.service = service;
    }
    LibraryReportReturnBookComponent.prototype.ngOnInit = function () {
        this.loadBooks();
    };
    LibraryReportReturnBookComponent.prototype.loadBooks = function () {
        var _this = this;
        this.service.bookInLibrary()
            .subscribe(function (data) { return _this.books = data; });
    };
    LibraryReportReturnBookComponent.prototype.downloadReport = function (books) {
        this.service.downloadReport(this.books, 'ReportReturnBooks.xlsx', 'FileReportReturnBooks');
    };
    LibraryReportReturnBookComponent = __decorate([
        Component({
            selector: 'app-library-reportReturnBook',
            templateUrl: './library-reportReturnBook.component.html'
        }),
        __metadata("design:paramtypes", [LibraryService])
    ], LibraryReportReturnBookComponent);
    return LibraryReportReturnBookComponent;
}());
export { LibraryReportReturnBookComponent };
//# sourceMappingURL=library-reportReturnBook.component.js.map