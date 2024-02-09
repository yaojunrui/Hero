import { Component } from '@angular/core';
import { Hero } from './heroes/hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  onSelect(e) {
    console.log("select hero.")
    this.hero = e
  }
  hero: Hero
}
