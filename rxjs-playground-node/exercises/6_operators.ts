import { from } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';

let dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

from(dataArray)
  .pipe(
    map(x => x * 5),
    filter(x => x > 5),
    filter(x => x % 2 === 0),
    reduce((x,y) => x + y),
    map(summe => '💩'.repeat(summe))
  ).subscribe(console.log)

