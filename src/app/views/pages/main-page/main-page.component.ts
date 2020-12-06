import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beer } from './../../../core/util/models/beer';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  private _BEERS: Beer[];
  private _INITIAL_BEERS_ARRAY: Beer[];

  public get beers(): Beer[] {
    return this._BEERS;
  }
  @Input()
  public set beers(value: Beer[]) {
    this._BEERS = value;
  }

  public get initialBeersArray(): Beer[] {
    return this._INITIAL_BEERS_ARRAY;
  }
  @Input()
  public set initialBeersArray(value: Beer[]) {
    this._INITIAL_BEERS_ARRAY = value;
  }

  @Output() emitIsFavoriteArray = new EventEmitter<Beer[]>();
  @Output() isFavoriteClicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  isFavorite(beer: Beer): void {
    let favClicked = false;
    beer.favorite = !beer.favorite;
    for (const initBeer of this.initialBeersArray) {
      if (beer.id === initBeer.id) {
        initBeer.favorite = beer.favorite;
      }
    }
    this.emitIsFavoriteArray.emit(this.initialBeersArray);
    if (beer.favorite) {
      favClicked = true;
      this.isFavoriteClicked.emit(favClicked);
    }
  }

  openDialog(): void {}
}
