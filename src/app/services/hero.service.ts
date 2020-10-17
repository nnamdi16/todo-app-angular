import { HEROES } from './../data/mock-heroes';
import { Hero } from './../models/Hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes():Hero[] {
    return HEROES;
  }
}
