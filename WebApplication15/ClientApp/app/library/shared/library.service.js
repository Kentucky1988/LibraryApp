var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
var LibraryService = /** @class */ (function () {
    function LibraryService(http, router) {
        this.http = http;
        this.router = router;
        this.url = "/LibraryWork";
    }
    LibraryService.prototype.createNoute = function (note) {
        return this.http.post(this.url + '/' + 'AddNote', note);
    };
    LibraryService.prototype.changeNote = function (note) {
        return this.http.put(this.url + '/' + 'ChangeNote', note);
    };
    LibraryService.prototype.bookInLibrary = function () {
        return this.http.get(this.url + '/' + 'BooksInLibrary');
    };
    LibraryService.prototype.booksNotInLibrary = function () {
        return this.http.get(this.url + '/' + 'BooksNotInLibrary');
    };
    LibraryService.prototype.readersBooks = function (id) {
        return this.http.get(this.url + '/' + 'ReadersBooks' + '/' + id);
    };
    LibraryService.prototype.downloadReport = function (list, fileName, nameActionMethod) {
        var _this = this;
        return this.http.post(this.url + '/' + nameActionMethod, list, { responseType: 'blob' }).subscribe(function (blob) {
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;
            link.click();
            _this.router.navigate(["library"]);
        });
    };
    LibraryService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], LibraryService);
    return LibraryService;
}());
export { LibraryService };
//# sourceMappingURL=library.service.js.map