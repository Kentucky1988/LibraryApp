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
var LibraryTookAwayBookComponent = /** @class */ (function () {
    function LibraryTookAwayBookComponent(service, serviceClients, router, activeRoute) {
        this.service = service;
        this.serviceClients = serviceClients;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    LibraryTookAwayBookComponent.prototype.ngOnInit = function () {
        this.loadClients();
    };
    LibraryTookAwayBookComponent.prototype.loadClients = function () {
        var _this = this;
        this.serviceClients.getClients()
            .subscribe(function (data) { return _this.clients = data; });
    };
    LibraryTookAwayBookComponent.prototype.loadBooks = function () {
        var _this = this;
        this.service.bookInLibrary()
            .subscribe(function (data) { return _this.books = data; });
    };
    LibraryTookAwayBookComponent.prototype.save = function () {
        var _this = this;
        this.movementBooks = {
            'clientId': this.clientId,
            'bookId': this.bookId,
            'date': this.dateReturn
        };
        this.service.createNoute(this.movementBooks)
            .subscribe(function (data) { return _this.router.navigate(["library"]); }, function (error) { _this.router.navigate(["library"]); });
    };
    LibraryTookAwayBookComponent = __decorate([
        Component({
            selector: 'app-library-tookAwayBook',
            templateUrl: './library-tookAwayBook.component.html'
        }),
        __metadata("design:paramtypes", [LibraryService,
            ClientService,
            Router,
            ActivatedRoute])
    ], LibraryTookAwayBookComponent);
    return LibraryTookAwayBookComponent;
}());
export { LibraryTookAwayBookComponent };
//# sourceMappingURL=library-tookAwayBook.component.js.map