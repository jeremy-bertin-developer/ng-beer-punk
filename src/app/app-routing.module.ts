import { PagesComponent } from './views/pages/pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePageComponent } from './views/pages/favorite-page/favorite-page.component';
import { MainPageComponent } from './views/pages/main-page/main-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: MainPageComponent },
      { path: 'favorite', component: FavoritePageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
