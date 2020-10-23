import { Component, OnInit } from '@angular/core';
import { Hero } from './../../models/Hero';
import { HeroService } from './../../services/hero.service';
import { MessageService } from './../../services/message.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // selectedHero: Hero;
  heroes:Hero[];
  heros: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  //Add a private heroService parameter of type HeroService to the constructor.
  constructor(private heroService:HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    //getHeroes() inside the ngOnInit lifecycle hook
    this.getHeroes();
    console.log(this.heroes);

  }

  // onSelect(hero:Hero){
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  // }

  getHeroes():void {
     this.heroService.getHeroes().subscribe(heroes =>this.heroes=heroes);
  }

}
