import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      {
        isbn: '111',
        title: 'Angular',
        description: 'Grundlagen...',
        rating: 5
      },
      {
        isbn: '222',
        title: 'AngularJS',
        description: 'Einführung...',
        rating: 3
      },
      {
        isbn: '333',
        title: 'Vue.js',
        description: 'Tolles Buch, aber zu spät geliefert',
        rating: 1
      }
    ];
  }

}
