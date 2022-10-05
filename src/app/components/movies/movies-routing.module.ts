import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { IndependentComponent } from './independent/independent.component';
import { HorrorComponent } from './horror/horror.component';
import { ComediaComponent } from './comedia/comedia.component';
import { AnimeComponent } from './anime/anime.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'independent',
        component: IndependentComponent
      },
      {
        path: 'horror',
        component: HorrorComponent
      },
      {
        path: 'comedia',
        component: ComediaComponent
      },
      {
        path: 'anime',
        component: AnimeComponent
      }
    ]
  }
] 

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class MoviesRoutingModule { }
