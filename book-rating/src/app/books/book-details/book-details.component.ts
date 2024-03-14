import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, concatMap, map, mergeMap, of, retry, switchMap } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

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

    // TODO: lies dir im Angular-Buch das Kapitel zur async-Pipe durch
    router.paramMap.pipe(
      map(paramMap => paramMap.get('isbn') || ''),
      switchMap(isbn => store.getSingle(isbn).pipe(
        retry({
          count: 3,
          delay: 1000
        }),
        catchError((err: HttpErrorResponse) => { return of({
          isbn: '0',
          title: 'Fehler',
          description: err.message,
          rating: 0,
          price: 0
        })})
      ))
    ).subscribe(book => this.book = book);
  }
}
