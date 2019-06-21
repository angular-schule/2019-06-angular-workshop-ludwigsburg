import { Observable } from 'rxjs';

/*************************************/

// TODO
const myObservable$ = new Observable(subscriber => {
  subscriber.next('🐼' + new Date())
  subscriber.next('🐰')
  subscriber.next('🐶')
  subscriber.error('🤬')
  subscriber.next('🐶') // nix passiert
});

/*************************************/

const observer = {
  next: e => console.log(e),
  error: e => console.error('ERROR', e),
  complete: () => console.info('Complete')
};

myObservable$.subscribe(observer);

// setTimeout(() => myObservable$.subscribe(observer), 1000);

