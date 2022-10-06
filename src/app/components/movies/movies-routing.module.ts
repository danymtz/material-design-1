import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { HorrorComponent } from './horror/horror.component';
import { ComediaComponent } from './comedia/comedia.component';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';

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
        path: 'horror',
        component: HorrorComponent
      },
      {
        path: 'comedia',
        component: ComediaComponent
      } 
    ]
  }
] 

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class MoviesRoutingModule { }
