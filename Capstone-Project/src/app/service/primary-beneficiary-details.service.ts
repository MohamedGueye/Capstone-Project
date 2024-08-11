import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrimaryBeneficiary } from '../models/primary-beneficiary.model';

@Injectable({
  providedIn: 'root'
})
export class PrimaryBeneficiaryDetailsService {

  constructor(private httpClient: HttpClient) { }

  retrievePrimaryBeneficiaryDetails = (accountNumber: string) => {
    const formattedAccountNumber = accountNumber.replace(/-|\s/g, '');
    const url = `http://localhost:8080/primaryBeneficiary/${formattedAccountNumber}`

    return this.httpClient.get<PrimaryBeneficiary>(url);
  }
}
