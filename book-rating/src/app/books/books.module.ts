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
    MatInputModule
  ],
  exports: [
    DashboardComponent
  ],
  entryComponents: [
    CreateBookComponent
  ]
})
export class BooksModule { }
