import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { HEROES } from './../data/mock-heroes';
import { Hero } from './../models/Hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }
}
