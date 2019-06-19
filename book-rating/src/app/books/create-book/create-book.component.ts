import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

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
    const newBook = {
      ...this.booksForm.value,
      rating: 1
    };

    // Hands on!
    // 1. Event "createBook" feuern (mit Buch)
    // 2. subscriben auf Event
    // 3. dem Buch-Array ein Element hinzufügen


    this.booksForm.reset();
  }
}
