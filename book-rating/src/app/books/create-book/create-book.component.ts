import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  @Output() createBook = new EventEmitter<Book>();

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

    this.createBook.emit(newBook);
    this.booksForm.reset();
  }
}
