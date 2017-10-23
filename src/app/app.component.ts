import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PWAs at ATO';
  public value: Date = new Date(2020, 2, 22);
  public listItems: Array<string> = [
     "Earth",
     "Jupiter",
     "Mars",
     "Mercury",
     "Neptune",
     "Saturn",
     "Uranus",
     "Venus"
  ];
}
