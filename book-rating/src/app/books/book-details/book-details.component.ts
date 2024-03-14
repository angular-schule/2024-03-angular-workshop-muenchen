import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {


  constructor(router: ActivatedRoute, private store: BookStoreService) {

    router.paramMap.pipe(
      map(paramMap => paramMap.get('isbn') || ''),
      map(isbn => store.getSingle(isbn))
    ).subscribe(x => console.log(x.subscribe(y => console.log(y))));
  }
}
