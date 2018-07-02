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
import { ClientService } from '../shared/clients.service';
var ClientsEditComponent = /** @class */ (function () {
    function ClientsEditComponent(service, router, activeRoute) {
        this.service = service;
        this.router = router;
        this.activeRoute = activeRoute;
    }
    ClientsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.activeRoute.snapshot.paramMap.get("id");
        this.service.getClient(id).subscribe(function (data) { _this.client = data; });
    };
    ClientsEditComponent.prototype.save = function () {
        var _this = this;
        this.service.updateClient(this.client).subscribe(function (data) { return _this.router.navigate(["clients"]); });
    };
    ClientsEditComponent = __decorate([
        Component({
            selector: 'app-clients-edit',
            templateUrl: './clients-edit.component.html'
        }),
        __metadata("design:paramtypes", [ClientService, Router, ActivatedRoute])
    ], ClientsEditComponent);
    return ClientsEditComponent;
}());
export { ClientsEditComponent };
//# sourceMappingURL=clients-edit.component.js.map