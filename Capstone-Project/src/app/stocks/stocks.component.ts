import { Component, Input } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { Customer } from '../models/customer.model';

@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.scss'
})
export class StocksComponent {
  @Input() customerDetails!: Customer | undefined;
}
