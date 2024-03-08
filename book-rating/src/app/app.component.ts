import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // kleine Hausaufgabe
  // ein Buch hat: isbn, title, description, price - Zeige ein Buch an!

  title = 'Book Rating 🅰️';
  blubb = 'Hallo'
}
