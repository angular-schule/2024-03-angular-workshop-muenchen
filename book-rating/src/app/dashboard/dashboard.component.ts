import { Component } from '@angular/core';
import { Book } from '../book';
import { BookComponent } from '../book/book.component';
import { NgClass } from '@angular/common';

// ins terminal: ng g c dashboard
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    // JsonPipe,
    // UpperCasePipe,
    // LowerCasePipe
    BookComponent,
    NgClass // Direktive: ngClass, ngStyle
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  books: Book[] = [
    {
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5,
      price: 42.9
    },
    {
      isbn: '111',
      title: 'AngularJS',
      description: 'Vorgänger Buch',
      rating: 3,
      price: 30
    },
    {
      isbn: '22',
      title: 'jQuery',
      description: 'Voll veraltetes Buch',
      rating: 1,
      price: 1
    },
  ];

  doRateUp(book: Book) {
    console.table(book);
  }

  doRateDown(book: Book) {
    console.table(book)
  }
}
