import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() searchExecuted: EventEmitter<string> = new EventEmitter();
  @ViewChild('searchBar', { static: true }) searchBar!: ElementRef;

  onSearch(value: string) {
    this.searchExecuted.emit(value);
  }
}
