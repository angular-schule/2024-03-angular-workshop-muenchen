import { TestBed } from '@angular/core/testing';
import { BookRatingService } from './book-rating.service';
import { Book } from './book';

// 90 % AI -- fdescribe führt nur diesen Test durch
fdescribe('BookRatingService', () => {
  let service: BookRatingService;
  let testBook: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService);

    // Initialize a test book object
    testBook = {
      isbn: '000',
      title: 'Test Book',
      rating: 3,
      description: 'blubb',
      price: 1
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('rateUp', () => {
    it('should increase the book rating by 1 if not at maxRating', () => {
      const ratedBook = service.rateUp(testBook);
      expect(ratedBook.rating).toBe(4);
    });

    it('should not increase the book rating beyond maxRating', () => {
      testBook.rating = 5; // maxRating
      const ratedBook = service.rateUp(testBook);
      expect(ratedBook.rating).toBe(service.maxRating);
    });
  });

  describe('rateDown', () => {
    it('should decrease the book rating by 1 if not at minRating', () => {
      const ratedBook = service.rateDown(testBook);
      expect(ratedBook.rating).toBe(2);
    });

    it('should not decrease the book rating below minRating', () => {
      testBook.rating = 1; // minRating
      const ratedBook = service.rateDown(testBook);
      expect(ratedBook.rating).toBe(service.minRating);
    });
  });
});
