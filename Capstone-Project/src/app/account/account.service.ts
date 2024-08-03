import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  constructor(private httpClient: HttpClient) {}

  retrieveCustomerDetails = (accountNumber: string) => {
    const formattedAccountNumber = accountNumber.replace(/-|\s/g, '');
    const url = `http://localhost:8080/customer/${formattedAccountNumber}`

    return this.httpClient.get<Customer>(url);
  }
}
