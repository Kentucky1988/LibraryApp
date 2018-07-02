import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Client } from '../shared/clients.model';
import { ClientService } from '../shared/clients.service';

@Component({
    selector: 'clients-lessons-list',
    templateUrl: './сlients-list.component.html'
})

export class ClientListComponent implements OnInit {

    client: Client = new Client();
    clients: Client[];

    constructor(private dataService: ClientService, private router: Router) { }

    ngOnInit() {
        this.loadClients();
    }

    loadClients() {
        this.dataService.getClients()
            .subscribe((data: Client[]) => this.clients = data);
    }

    editClient(client: Client) {
        this.router.navigate(["clients", "edit", client.id]);
    }

    createClient() {
        this.router.navigate(["clients", "create"]);
    }

    deleteClient(client: Client) {
        this.dataService.deleteClient(client.id)
            .subscribe(data => this.loadClients());
    }
}


