var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientService } from './shared/clients.service';
import { ClientsCreateComponent } from './clients-create/clients-create.component';
import { ClientsEditComponent } from './clients-edit/clients-edit.component';
import { ClientListComponent } from './clients-list/clients-list.component';
var routes = [
    { path: "clients", component: ClientListComponent },
    { path: "clients/create", component: ClientsCreateComponent },
    { path: "clients/edit/:id", component: ClientsEditComponent }
];
var ClientRoutingModule = /** @class */ (function () {
    function ClientRoutingModule() {
    }
    ClientRoutingModule = __decorate([
        NgModule({
            providers: [ClientService],
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], ClientRoutingModule);
    return ClientRoutingModule;
}());
export { ClientRoutingModule };
//# sourceMappingURL=clients-routing.module.js.map