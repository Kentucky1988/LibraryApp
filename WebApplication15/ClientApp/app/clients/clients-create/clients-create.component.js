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
import { ClientService } from '../shared/clients.service';
import { Client } from '../shared/clients.model';
var ClientsCreateComponent = /** @class */ (function () {
    function ClientsCreateComponent(service, router) {
        this.service = service;
        this.router = router;
        this.client = new Client();
    }
    ClientsCreateComponent.prototype.save = function () {
        var _this = this;
        this.service.createClient(this.client).subscribe(function (data) { return _this.router.navigate(["clients"]); });
    };
    ClientsCreateComponent = __decorate([
        Component({
            selector: 'app-clients-create',
            templateUrl: './clients-create.component.html'
        }),
        __metadata("design:paramtypes", [ClientService, Router])
    ], ClientsCreateComponent);
    return ClientsCreateComponent;
}());
export { ClientsCreateComponent };
//# sourceMappingURL=clients-create.component.js.map