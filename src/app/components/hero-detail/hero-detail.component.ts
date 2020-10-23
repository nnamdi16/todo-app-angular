import { HeroService } from './../../services/hero.service';
import { Hero } from './../../models/Hero';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  // @Input() hero:Hero;
  hero: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
     
  }

  getHero():void {
    // route.snapshpt is a static image of the route information shortly after the component was created 
    // the parmaMap is a dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch
    //The + sign converts the string to a number, which is what hero id should since route parmaeters are always string
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }


  goBack():void {
    this.location.back();
  }


}
