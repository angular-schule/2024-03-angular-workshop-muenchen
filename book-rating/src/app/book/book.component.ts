import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  @Input()
  book: Book | undefined;
}
