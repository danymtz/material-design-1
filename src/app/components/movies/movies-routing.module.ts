import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { HorrorComponent } from './horror/horror.component';
import { ComediaComponent } from './comedia/comedia.component';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';
import { AdventureComponent } from './adventure/adventure.component';
import { CrimeComponent } from './crime/crime.component';

const routes: Routes =[
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'action',
        component: ActionComponent
      },
      {
        path: 'adventure',
        component: AdventureComponent
      },
      {
        path: 'crime',
        component: CrimeComponent
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
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
] 

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class MoviesRoutingModule { }
