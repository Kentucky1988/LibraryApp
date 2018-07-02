import { Component, Input } from '@angular/core';

import { Client } from '../shared/clients.model';

@Component({
    selector: "client-form",
    templateUrl: './client-form.component.html'
})

export class ClientFormComponent {
    @Input() client: Client;
}