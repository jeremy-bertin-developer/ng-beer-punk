import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { BeerComponent } from './views/pages/beer/beer.component';
import { FavoritePageComponent } from './views/pages/favorite-page/favorite-page.component';
import { HeaderPageComponent } from './views/pages/header-page/header-page.component';
import { DialogPopUpComponent } from './views/pages/main-page/dialog-pop-up/dialog-pop-up.component';
import { MainPageComponent } from './views/pages/main-page/main-page.component';
import { PagesComponent } from './views/pages/pages.component';
import { DialogComponent } from './views/pages/main-page/dialog-pop-up/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    MainPageComponent,
    BeerComponent,
    ShortenPipe,
    FavoritePageComponent,
    PagesComponent,
    DialogPopUpComponent,
    DialogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, NoopAnimationsModule, MatSliderModule, MatDialogModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
