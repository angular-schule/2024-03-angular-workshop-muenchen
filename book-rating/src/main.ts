import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));




class Test {

  public nachricht: string;

  constructor(nachricht: string) {
    this.nachricht = nachricht;
    // console.log(this.nachricht);
  }
}

const test = new Test('Hallo TypeScript 😻!!', 42);
console.log(test.nachricht);
console.log(test.antwort); // soll funktionieren