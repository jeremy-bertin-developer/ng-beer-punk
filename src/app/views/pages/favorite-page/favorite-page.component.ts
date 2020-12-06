import { HttpService } from './../../../http.service';
import { Beer } from './../../../core/util/models/beer';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css'],
})
export class FavoritePageComponent implements OnInit {
  private _FAVORITE_BEERS_ARRAY: Beer[];

  beers: Beer[];

  public get favoriteBeersArray(): Beer[] {
    return this._FAVORITE_BEERS_ARRAY;
  }
  @Input()
  public set favoriteBeersArray(value: Beer[]) {
    this._FAVORITE_BEERS_ARRAY = value;
    if (this._FAVORITE_BEERS_ARRAY) {
      this.beers = [];
      this._FAVORITE_BEERS_ARRAY.forEach((el) => {
        if (el.favorite) {
          this.beers.push(el);
        }
      });
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
