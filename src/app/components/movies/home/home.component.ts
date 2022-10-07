import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any[] = JSON.parse(localStorage.getItem('movie-list')??'[]'); // Obtenemos el arreglo del localStorage

  showFiller: boolean = true;

  constructor(public dialog: MatDialog){}

  ngOnInit (){

  }

  openDialog(movie: any[]): void {
    this.dialog.open(DialogComponent, {data: movie});    
  }

}
