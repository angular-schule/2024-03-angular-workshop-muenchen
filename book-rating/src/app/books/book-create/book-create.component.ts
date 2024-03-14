import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {

  @Output() create = new EventEmitter<Book>();

  bookForm = new FormGroup({

    isbn: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    description: new FormControl('', {
      nonNullable: true
    })
  });

  isInvalid(control: FormControl) {
    return control.invalid && control.touched;
  }

  hasError(control: FormControl, errorCode: string) {
    return control.hasError(errorCode) && control.touched;
  }

  c = this.bookForm.controls;

  submitForm() {

    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }

    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1,
      price: 1
    }

    // TODO
    // 1. Erzeuge ein Event mit dem Namen `create` (Payload: `Book`)
    // 2. Versende das Event
    // 3. Subscribe dich auf das Event im Dashboard
    // 4. Füge das Buch dem Array hinzu (Verwende den Spread-Operator dafür `...`)
    this.create.emit(newBook);
    this.bookForm.reset();
  }
}
