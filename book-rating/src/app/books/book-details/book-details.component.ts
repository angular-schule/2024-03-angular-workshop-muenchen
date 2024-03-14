import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { concatMap, map, mergeMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    RouterLink,
    JsonPipe
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {

  book: Book | undefined;


  constructor(router: ActivatedRoute, private store: BookStoreService) {

    router.paramMap.pipe(
      map(paramMap => paramMap.get('isbn') || ''),
      concatMap(isbn => store.getSingle(isbn))
    ).subscribe(book => this.book = book);
  }
}
