import { Pipe, type PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: Date): string {
    if(!value) { return ''; }
    return formatDistanceToNow(value);
  }

}
