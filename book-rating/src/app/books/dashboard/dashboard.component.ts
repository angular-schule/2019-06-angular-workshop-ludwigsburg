import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { MatBottomSheet } from '@angular/material';
import { CreateBookComponent } from '../create-book/create-book.component';
import { BookStoreService } from '../book-store.service';

import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { LoadBooks } from '../actions/book.actions';
import { getBooksLoading, getAllBooks } from '../selectors/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  loading$ = this.store.pipe(select(getBooksLoading));
  books$ = this.store.pipe(select(getAllBooks));

  constructor(private bottomSheet: MatBottomSheet,
              private store: Store<State>) {
  }

  ngOnInit() {
    // this.store.dispatch(new LoadBooks());
  }

  doRateUp(book: Book) {
    // const ratedBook = this.br.rateUp(book);
    // this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book) {
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating);
  }

  doCreateBook(newBook: Book) {
    // this.books = [...this.books, newBook];
  }

  showCreateBook() {
    const ref = this.bottomSheet.open(CreateBookComponent);
    ref.afterDismissed()
      .subscribe(newBook => {
        if (newBook) {
          this.doCreateBook(newBook);
        }
      });
  }

}
