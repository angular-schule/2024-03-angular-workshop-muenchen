import { Routes } from '@angular/router';
import { DashboardComponent } from './books/dashboard/dashboard.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { NotFoundComponent } from './books/not-found/not-found.component';

// NICHT VERWENDEN: <a href="/books/1234">Klick mich!</a>

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books' },
  { path: 'books', component: DashboardComponent },
  { path: 'books/:isbn', component: BookDetailsComponent },
  { path: '**', component: NotFoundComponent }
];
