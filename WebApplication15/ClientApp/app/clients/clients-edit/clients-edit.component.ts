import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Client } from '../shared/clients.model';
import { ClientService } from '../shared/clients.service';

@Component({
    selector: 'app-clients-edit',
    templateUrl: './clients-edit.component.html'
})

export class ClientsEditComponent implements OnInit {

    client: Client;

    constructor(private service: ClientService, private router: Router, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        let id: number = +this.activeRoute.snapshot.paramMap.get("id");
        this.service.getClient(id).subscribe((data: Client) => { this.client = data; });
    }

    save() {
        this.service.updateClient(this.client).subscribe(data => this.router.navigate(["clients"]));
    }
}

