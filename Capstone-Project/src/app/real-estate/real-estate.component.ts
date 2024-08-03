import { Component, Input } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-real-estate',
  standalone: true,
  imports: [],
  templateUrl: './real-estate.component.html',
  styleUrl: './real-estate.component.scss'
})
export class RealEstateComponent {
  @Input() customerDetails!: Customer | undefined;
}
