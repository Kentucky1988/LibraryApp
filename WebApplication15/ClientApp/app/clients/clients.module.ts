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

@NgModule({
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

export class ClientModule { }

