import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../shared/clients.service';
import { Client } from '../shared/clients.model';

@Component({
    selector: 'app-clients-create',
    templateUrl: './clients-create.component.html'
})

export class ClientsCreateComponent {

    client: Client = new Client();
    constructor(private service: ClientService, private router: Router) { }

    save() {
        this.service.createClient(this.client).subscribe(data => this.router.navigate(["clients"]));
    }
}

