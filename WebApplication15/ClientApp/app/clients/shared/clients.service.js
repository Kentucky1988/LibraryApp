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
var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.url = "/api/Clients";
    }
    ClientService.prototype.getClients = function () {
        return this.http.get(this.url);
    };
    ClientService.prototype.getClient = function (id) {
        return this.http.get(this.url + '/' + id);
    };
    ClientService.prototype.createClient = function (product) {
        return this.http.post(this.url, product);
    };
    ClientService.prototype.updateClient = function (product) {
        return this.http.put(this.url + '/' + product.id, product);
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.http.delete(this.url + '/' + id);
    };
    ClientService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ClientService);
    return ClientService;
}());
export { ClientService };
//# sourceMappingURL=clients.service.js.map