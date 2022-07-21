import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Merchant } from './merchant';

@Injectable({
  providedIn: 'root',
})
export class MerchantService {
  constructor(private http: HttpClient) {}

  create(payload: Merchant) {
    return this.http.post<Merchant>(
      'https://eougpu9eevblc3p.m.pipedream.net',
      payload
    );
  }
}
