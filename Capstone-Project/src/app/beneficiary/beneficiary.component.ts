import { Component, Input } from '@angular/core';
import { PrimaryBeneficiary } from '../models/primary-beneficiary.model';
import { ContingentBeneficiary } from '../models/contingent-beneficiary.model';

@Component({
  selector: 'app-beneficiary',
  standalone: true,
  imports: [],
  templateUrl: './beneficiary.component.html',
  styleUrl: './beneficiary.component.scss'
})
export class BeneficiaryComponent {
  @Input() primaryBeneficiary!: PrimaryBeneficiary | undefined;
  @Input() contingentBeneficiary!: ContingentBeneficiary | undefined;
}
