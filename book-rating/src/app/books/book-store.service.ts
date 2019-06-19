import { Injectable } from '@angular/core';
import { Book } from './shared/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Book[]>('https://api.angular.schule/books');
  }

  getSingle(isbn: string) {
    return this.http.get<Book>('https://api.angular.schule/book/' + isbn);
  }
}
