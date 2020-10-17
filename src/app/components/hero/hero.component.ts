import { Component, OnInit } from '@angular/core';
import { HEROES } from './../../data/mock-heroes';
import { Hero } from './../../models/Hero';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  selectedHero: Hero;
  heroes:Hero[];
  heros: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  //Add a private heroService parameter of type HeroService to the constructor.
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    console.log(this.heroes);
  }

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }

}
