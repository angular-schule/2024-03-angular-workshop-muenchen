import { Component } from '@angular/core';
import { Book } from '../book';
import { BookComponent } from '../book/book.component';
import { NgClass } from '@angular/common';
import { BookRatingService } from '../book-rating.service';
import { BookStoreService } from '../book-store.service';
import { BookCreateComponent } from '../book-create/book-create.component';

// ins terminal: ng g c dashboard
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    // JsonPipe,
    // UpperCasePipe,
    // LowerCasePipe
    BookComponent,
    NgClass, // Direktive: ngClass, ngStyle
    BookCreateComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(private bookRatingService: BookRatingService, private store: BookStoreService) {
    this.store.getAll().subscribe(books => this.books = books);
  }

  doRateUp(book: Book) {
    const ratedBook = this.bookRatingService.rateUp(book);
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.bookRatingService.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating)
  }

  doCreate(book: Book) {
    this.books = [...this.books, book];
  }
}
