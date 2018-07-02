import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientService } from './shared/clients.service';
import { ClientsCreateComponent } from './clients-create/clients-create.component';
import { ClientsEditComponent } from './clients-edit/clients-edit.component';
import { ClientListComponent } from './clients-list/clients-list.component';

const routes: Routes = [
    { path: "clients", component: ClientListComponent },
    { path: "clients/create", component: ClientsCreateComponent },
    { path: "clients/edit/:id", component: ClientsEditComponent }
]

@NgModule({
    providers: [ClientService],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class ClientRoutingModule { }




