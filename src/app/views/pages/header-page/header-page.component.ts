import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css'],
})
export class HeaderPageComponent implements OnInit {
  routerId: string;
  beerName: string;
  filterBeers: string;

  @Output() emitRouterId = new EventEmitter<string>();
  @Output() emitGetBeers = new EventEmitter<string>();
  @Output() emitFilterBeers = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.filterBeers = '';
    this.routerId = 'HOME';
  }

  onClickGoToPage(routeSelected: string): void {
    if (routeSelected === 'HOME') {
      this.routerId = routeSelected;
      this.router.navigate(['']);
    }
    if (routeSelected === 'FAVORITE') {
      this.routerId = routeSelected;
      this.router.navigate(['favorite']);
    }
    this.emitRouterId.emit(this.routerId);
  }

  checkValue(filterBeers: string) {
    this.emitFilterBeers.emit(filterBeers);
  }
}
