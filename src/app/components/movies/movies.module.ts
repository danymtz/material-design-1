import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorrorComponent } from './horror/horror.component';
import { IndependentComponent } from './independent/independent.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { ComediaComponent } from './comedia/comedia.component';
import { HomeComponent } from './home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ActionComponent } from './action/action.component';
import { AdventureComponent } from './adventure/adventure.component';
import { CrimeComponent } from './crime/crime.component';



@NgModule({
  declarations: [
    HorrorComponent,
    IndependentComponent,
    ComediaComponent,

    HomeComponent,
    ActionComponent,
    AdventureComponent,
    CrimeComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
