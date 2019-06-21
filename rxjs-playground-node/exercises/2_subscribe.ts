import { simpleTimer$ } from './data/simple-timer';

// TODO: Subscribe

// simpleTimer$.subscribe(
//   e => console.log(e),
//   err => console.log(err),
//   () => console.info('Complete 😃')
// )

const observer = {
 next: e => console.log(e),
 error: err => console.log(err),
 complete: () => console.info('Complete 😃')
};

simpleTimer$.subscribe(observer);

setTimeout(() => simpleTimer$.subscribe(observer), 3000);

