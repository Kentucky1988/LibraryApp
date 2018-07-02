var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ClientRoutingModule } from './clients-routing.module';
import { ClientsCreateComponent } from './clients-create/clients-create.component';
import { ClientsEditComponent } from './clients-edit/clients-edit.component';
import { ClientFormComponent } from './clients-form/client-form.component';
import { ClientService } from './shared/clients.service';
import { ClientListComponent } from './clients-list/clients-list.component';
var ClientModule = /** @class */ (function () {
    function ClientModule() {
    }
    ClientModule = __decorate([
        NgModule({
            imports: [
                ClientRoutingModule,
                FormsModule,
                BrowserModule,
                HttpClientModule
            ],
            declarations: [
                ClientListComponent,
                ClientsCreateComponent,
                ClientsEditComponent,
                ClientFormComponent
            ],
            providers: [ClientService]
        })
    ], ClientModule);
    return ClientModule;
}());
export { ClientModule };
//# sourceMappingURL=clients.module.js.map