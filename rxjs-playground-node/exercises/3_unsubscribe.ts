import { simpleTimer$ } from './data/simple-timer';

const subscription = simpleTimer$.subscribe(
  e => console.log(e),
  e => console.error(e),
  () => console.info('Complete')
);

/******************************/

// später in Angular: immer async nutzen! das "unsubscribed" für euch
setTimeout(() => subscription.unsubscribe(), 3000);

