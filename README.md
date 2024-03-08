<img src="https://assets.angular.schule/header-intensivworkshop2.png">

#### **mit Johannes Hoppe**

<hr>

**Herzlich Willkommen – und schön, dass du dabei bist!**  
In diesem Repository findest du alle Infos zur Vorbereitung und während des Workshops den Quelltext unserer Beispielanwendung.

# ✅ Vorbereitung

Damit wir gleich durchstarten können, solltest Du ein paar Vorbereitungen treffen.  
Die gesamte Installation wird rund 30 Minuten dauern. 

## 1.) Benötigte Software

1. **Node.js 18 oder 20** (jeweils die aktuelle Nebenversionsnummer): [https://nodejs.org](https://nodejs.org)
2. **Google Chrome:** [https://www.google.com/chrome/](https://www.google.com/chrome/)
      + [Angular DevTools](https://chrome.google.com/webstore/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)
4. **Visual Studio Code:** [https://code.visualstudio.com](https://code.visualstudio.com)<br>
   _oder_ eine andere geeignete IDE wie **IntelliJ/WebStorm**
   + Wir empfehlen dir eine Auswahl an Extensions für Visual Studio Code.  
     Dazu haben wir ein Extension Pack vorbereitet, das alles Nötige einrichtet:  
     [Angular-Schule: Extension Pack (nur für Visual Studio Code)](https://marketplace.visualstudio.com/items?itemName=angular-schule.angular-schule-extension-pack)



## 2.) Pakete installieren

Die Angular CLI ist das offizielle Build-Tool für Angular. Mit folgendem Befehl kannst Du die CLI auf dem System installieren:

```bash
npm install --location=global @angular/cli
```

⚠️ Überprüfe bitte anschließend die Versionen, damit wir beim Workshop alle auf dem gleichen Stand sind:

```
node -v
> Erwartet: 18.10.x, 20.x.x oder höher, aber nicht 16.x, 19.x oder 21.x!

npm -v
> Erwartet: 6.x oder höher

ng version
> Erwartet: 17.x.x (!)
```

Falls du bereits eine ältere Version der Angular CLI auf deinem System installiert hast, führe die Installation bitte trotzdem durch.
Global sollte stets die neueste Version installiert sein.


## 3.) Startprojekt erzeugen

Bitte lege das Übungsprojekt schon vor Beginn des Workshops an.
Die Angular CLI nimmt uns die meisten Schritte schon ab.
Was die Parameter im Einzelnen bedeuten, besprechen wir natürlich im Workshop!

> ⚠️ Bitte erstelle das Projekt nicht auf einem Netzlaufwerk, sondern direkt auf der lokalen Festplatte!

Führe in Deinem Arbeitsverzeichnis die folgenden Befehle aus:

```bash
ng new book-rating --style=scss --no-ssr
cd book-rating
ng serve
```

Die Installation kann bei langsamer Internetverbindung sehr lange dauern.
Warte beim Schritt `Installing packages (npm)` mit Geduld ab!


> Auf http://localhost:4200 sollte nun eine Website mit dem Text *"Hello, book-rating"* erscheinen!

![Screenshot CLI](https://assets.angular.schule/chrome_cli_welcome_ng17.png)

Beende danach den laufenden Webserver mit Strg + C.


## 4.) Projekt erforschen

Öffne den Projektordner `book-rating` in deinem Editor.
Nimm dir nun ein paar Minuten Zeit, um die Struktur des generierten Projekts zu untersuchen.
So hast du die wichtigsten Dateien schon einmal gesehen, bevor wir den Aufbau in der Schulung ausführlich besprechen!



### Wir freuen uns schon! 🙂

Wenn bei allen Teilnehmenden das Grundgerüst steht, können wir ohne Zeitverlust loslegen.
Sollte es zu einer Fehlermeldung kommen, dann sende uns den Fehlertext einfach per Mail an [team@angular.schule](mailto:team@angular.schule).

<hr>

<img src="https://assets.angular.schule/logo-angular-schule.png" height="60">

### &copy; https://angular.schule | Stand: 27.02.2024

