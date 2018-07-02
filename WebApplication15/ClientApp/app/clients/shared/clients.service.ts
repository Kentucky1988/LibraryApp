import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Client } from './clients.model';

@Injectable()
export class ClientService {

    private url = "/api/Clients";

    constructor(private http: HttpClient) { }

    getClients() {
        return this.http.get(this.url);
    }

    getClient(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createClient(product: Client) {
        return this.http.post(this.url, product);
    }

    updateClient(product: Client) {

        return this.http.put(this.url + '/' + product.id, product);
    }

    deleteClient(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}