import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  constructor(private bottomSheetRef:
    MatBottomSheetRef<CreateBookComponent>) {
  }

  booksForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isValid(name: string) {
    const control = this.booksForm.get(name);
    return control.pristine || control.valid;
  }

  // TODO: hasError(name: string, errorCode: string)

  submitForm() {
    const newBook: Book = {
      ...this.booksForm.value,
      rating: 1
    };

    this.bottomSheetRef.dismiss(newBook);
    this.booksForm.reset();
  }
}
