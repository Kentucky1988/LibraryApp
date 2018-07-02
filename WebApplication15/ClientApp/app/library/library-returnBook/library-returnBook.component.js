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
import { Router, ActivatedRoute } from '@angular/router';
import { LibraryService } from '../shared/library.service';
import { ClientService } from '../../clients/shared/clients.service';
var LibraryReturnBookComponent = /** @class */ (function () {
    function LibraryReturnBookComponent(service, serviceClients, router, activeRoute) {
        this.service = service;
        this.serviceClients = serviceClients;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    LibraryReturnBookComponent.prototype.ngOnInit = function () {
        this.loadClients();
    };
    LibraryReturnBookComponent.prototype.loadClients = function () {
        var _this = this;
        this.serviceClients.getClients()
            .subscribe(function (data) { return _this.clients = data; });
    };
    LibraryReturnBookComponent.prototype.loadBooks = function (clientId) {
        var _this = this;
        this.service.readersBooks(clientId)
            .subscribe(function (data) { return _this.books = data; });
    };
    LibraryReturnBookComponent.prototype.save = function () {
        var _this = this;
        this.movementBooks = {
            'clientId': this.clientId,
            'bookId': this.bookId,
            'date': this.dateReturn
        };
        this.service.changeNote(this.movementBooks)
            .subscribe(function (data) { return _this.router.navigate(["library"]); }, function (error) { _this.router.navigate(["library"]); });
    };
    LibraryReturnBookComponent = __decorate([
        Component({
            selector: 'app-library-returnBook',
            templateUrl: './library-returnBook.component.html'
        }),
        __metadata("design:paramtypes", [LibraryService,
            ClientService,
            Router,
            ActivatedRoute])
    ], LibraryReturnBookComponent);
    return LibraryReturnBookComponent;
}());
export { LibraryReturnBookComponent };
//# sourceMappingURL=library-returnBook.component.js.map