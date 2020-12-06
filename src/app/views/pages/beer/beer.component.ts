import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit {
  private _NAME: string;
  private _ABV: number;
  private _BREWERS_TIPS: string;
  private _DESCRIPTION: string;
  private _IMAGE_URL: string;
  private _PH: number;
  private _FAVORITE: boolean;
  private _IS_SHOWN: boolean;

  public get name(): string {
    return this._NAME;
  }
  @Input()
  public set name(value: string) {
    this._NAME = value;
  }

  public get abv(): number {
    return this._ABV;
  }
  @Input()
  public set abv(value: number) {
    this._ABV = value;
  }

  public get brewersTips(): string {
    return this._BREWERS_TIPS;
  }

  @Input()
  public set brewersTips(value: string) {
    this._BREWERS_TIPS = value;
  }

  public get description(): string {
    return this._DESCRIPTION;
  }
  @Input()
  public set description(value: string) {
    this._DESCRIPTION = value;
  }

  public get imageUrl(): string {
    return this._IMAGE_URL;
  }
  @Input()
  public set imageUrl(value: string) {
    this._IMAGE_URL = value;
  }

  public get ph(): number {
    return this._PH;
  }
  @Input()
  public set ph(value: number) {
    this._PH = value;
  }

  public get favorite(): boolean {
    return this._FAVORITE;
  }
  @Input()
  public set favorite(value: boolean) {
    this._FAVORITE = value;
  }

  @Output() emitIsFaorite = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  isFavorite(): void {
    this.emitIsFaorite.emit();
  }
}
