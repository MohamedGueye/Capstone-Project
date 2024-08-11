import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
  standalone: true
})
export class DatePipe implements PipeTransform {

  /**
   * @param date Date received from API
   */

  local = 'en-US';
  dateFormat = 'MMM-dd-yyyy'

  transform(date: string): string {
    return formatDate(date, this.dateFormat, this.local);
  }

}
