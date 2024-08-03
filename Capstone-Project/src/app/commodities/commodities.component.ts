import { Component, Input } from '@angular/core';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-commodities',
  standalone: true,
  imports: [],
  templateUrl: './commodities.component.html',
  styleUrl: './commodities.component.scss'
})
export class CommoditiesComponent {
  @Input() customerDetails!: Customer | undefined;
}
