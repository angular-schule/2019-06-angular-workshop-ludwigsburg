import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { RepeatDirective } from './shared/repeat.directive';
import { CreateBookComponent } from './create-book/create-book.component';
import { MatButtonModule, MatIconModule, MatBottomSheetModule, MatCardModule, MatInputModule } from '@angular/material';
import { BookDetailsComponent } from './book-details/book-details.component';
import { StoreModule, Store } from '@ngrx/store';
import * as fromBook from './reducers/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/book.effects';
import { LoadBooks } from './actions/book.actions';
import { State } from '../reducers';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    RepeatDirective,
    CreateBookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatInputModule,
    StoreModule.forFeature('book', fromBook.reducer),
    EffectsModule.forFeature([BookEffects])
  ],
  exports: [
    DashboardComponent
  ],
  entryComponents: [
    CreateBookComponent
  ]
})
export class BooksModule {

  constructor(store: Store<State>) {
    store.dispatch(new LoadBooks());

  }
 }
