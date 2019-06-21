import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, switchMap, catchError, share } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../book-store.service';
import { HttpErrorResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;
  isOpen: false;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    this.book$ = this.route.paramMap
      .pipe(
        map(paramMap => paramMap.get('isbn')),
        switchMap(isbn => this.bs.getSingle(isbn)
          .pipe(catchError((err: HttpErrorResponse) => of({
            isbn: '000',
            title: 'Error',
            description: 'could not load ' + err.url,
            rating: 1,
            firstThumbnailUrl: ''
          })))
        ),
        // share()
      );
  }

}
