import { HttpService } from './../../http.service';
import { Beer } from './../../core/util/models/beer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit {
  initBeers: Beer[];
  beers: Beer[];
  routerId: string;
  favoriteBeers: Beer[];
  filterBeers: string;
  filteredArray: Beer[];
  isFavoriteClicked: boolean;

  constructor(private http: HttpService) {
    this.getAllBeersOnInit();
  }

  ngOnInit(): void {
    this.routerId = 'HOME';
  }

  getRouterId(routerId: string): void {
    this.routerId = routerId;
  }

  getIsFavoriteArray(favoriteBeers: Beer[]): void {
    this.favoriteBeers = [...favoriteBeers];
  }

  getAllBeersOnInit(): void {
    this.http.getBeers().subscribe(
      (x) => {
        this.beers = x;
      },
      (err) => {
        console.error('An error occurs', err);
      },
      () => {
        console.log('Observer complete');
      }
    );
  }

  filterTheBeers(filterBeers: string): void {
    this.filterBeers = filterBeers;
    const filteredArray = [];
    this.beers.forEach((el) => {
      if (el.name.toLowerCase().includes(this.filterBeers.toLowerCase())) {
        filteredArray.push(el);
      }
    });
    this.filteredArray = filteredArray;
  }

  getIfIsFavoriteClicked(isFavoriteClicked: boolean) {
    this.isFavoriteClicked = isFavoriteClicked;
    setTimeout(() => {
      this.isFavoriteClicked = false;
    }, 1000);
  }
}
