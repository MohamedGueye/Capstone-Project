import { Component, Input } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-businesses',
  standalone: true,
  imports: [],
  templateUrl: './businesses.component.html',
  styleUrl: './businesses.component.scss'
})
export class BusinessesComponent {
  @Input() customerDetails!: Customer | undefined;
}
