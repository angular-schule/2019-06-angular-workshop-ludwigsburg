import { from } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';

let dataArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

from(dataArray)
  .pipe(
    map(x => x * 10) // Operator
  ).subscribe(console.log)


// Hands on!

// 1. multipliziere alle Zahlen mit 5
// 2. sortiere alle Werte aus, die kleiner sind als 15
// 3. sortiere alle Werte aus, die ungerade sind
// 4. gib nur die Summe dieser Zahlen aus (ein Datensatz)

// 5. optional: gib genau so viele Smilies aus, wie die Summe lautet
