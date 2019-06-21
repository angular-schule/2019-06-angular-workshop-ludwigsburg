import { of, from, timer, interval } from 'rxjs';

// of(1,2,3,4,5,6).subscribe(console.log)
// from([1,2,3,4,5,6]).subscribe(console.log)

// const sub = interval(1000).subscribe(console.log)
// setTimeout(() => sub.unsubscribe(), 7000);


const sub = interval(1000).subscribe(
  number => {
    console.log(number);
    if (number === 5) {
      sub.unsubscribe();
    }
  })
