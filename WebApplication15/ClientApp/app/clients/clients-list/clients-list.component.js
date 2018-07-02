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
import { Router } from '@angular/router';
import { Client } from '../shared/clients.model';
import { ClientService } from '../shared/clients.service';
var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.client = new Client();
    }
    ClientListComponent.prototype.ngOnInit = function () {
        this.loadClients();
    };
    ClientListComponent.prototype.loadClients = function () {
        var _this = this;
        this.dataService.getClients()
            .subscribe(function (data) { return _this.clients = data; });
    };
    ClientListComponent.prototype.editClient = function (client) {
        this.router.navigate(["clients", "edit", client.id]);
    };
    ClientListComponent.prototype.createClient = function () {
        this.router.navigate(["clients", "create"]);
    };
    ClientListComponent.prototype.deleteClient = function (client) {
        var _this = this;
        this.dataService.deleteClient(client.id)
            .subscribe(function (data) { return _this.loadClients(); });
    };
    ClientListComponent = __decorate([
        Component({
            selector: 'clients-lessons-list',
            templateUrl: './сlients-list.component.html'
        }),
        __metadata("design:paramtypes", [ClientService, Router])
    ], ClientListComponent);
    return ClientListComponent;
}());
export { ClientListComponent };
//# sourceMappingURL=clients-list.component.js.map