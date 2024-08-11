import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContingentBeneficiary } from '../models/contingent-beneficiary.model';

@Injectable({
  providedIn: 'root'
})
export class ContingentBeneficiaryDetailsService {

  constructor(private httpClient: HttpClient) { }

  retrieveContingentBeneficiaryDetails = (accountNumber: string) => {
    const formattedAccountNumber = accountNumber.replace(/-|\s/g, '');
    const url = `http://localhost:8080/contingentBeneficiary/${formattedAccountNumber}`

    return this.httpClient.get<ContingentBeneficiary>(url);
  }
}
