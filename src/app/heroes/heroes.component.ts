import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes = HEROES;
  selectedHero?: Hero;


  ngOnInit() {
    console.log("in it.");
  }


  ngAfterViewInit() {
    console.log("After view");
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.detailHero.emit()
  }

  @Output() detailHero: EventEmitter<Hero> = new EventEmitter()

}

