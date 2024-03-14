import { Injectable } from '@angular/core';
import { Book } from '../book';

/**
 * Service for rating books within a specified range.
 * This service allows rating a book up or down while enforcing a maximum and minimum rating value.
 * (dieses Kommentar ist "JSDoc")
 */
@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  readonly minRating = 1;
  readonly maxRating = 5;

  rateUp(book: Book): Book {
    return {
      ...book,
      rating: Math.min(book.rating + 1, this.maxRating)
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: Math.max(book.rating - 1, this.minRating)
    };
  }
}
