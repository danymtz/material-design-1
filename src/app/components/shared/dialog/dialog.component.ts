import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None //Línea para quitar padding
})
export class DialogComponent implements OnInit {
  flagAdd: boolean = true;
  colorAdd: string = '#FFFFFF'
  iconAdd!: string;

  flagLike: boolean = true;
  colorLike: string = '#FFFFFF'

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.checkMovie();
  }

  addMovie(movie: any){
    let favoriteList = JSON.parse(localStorage.getItem('movie-list')??'[]'); //Obtenemos de local storage 
    let finded: boolean = false;

    for (let i=0; i<favoriteList.length; i++){ // Recorremos el arreglo de peliculas
      if(movie.id == favoriteList[i].id){
        this.iconAdd = 'add';
        this.colorAdd = '#FFFFFF';
        finded = true;
        favoriteList.splice(i,1)  // Si encuentra la pelicula, la quita
        localStorage.setItem('movie-list',JSON.stringify(favoriteList)) // Actualiza el local storage
        break;                    // Rompe el ciclo
      }
      else {
        this.iconAdd = 'done';
        this.colorAdd = 'green'; 
      }
    }
    if (!finded) {
      if (favoriteList.indexOf(movie)==-1){
        favoriteList.push(movie);
        console.log(favoriteList);
        localStorage.setItem('movie-list',JSON.stringify(favoriteList)) 
        this.iconAdd = 'done';
        this.colorAdd = 'green';     
      }
    }   
  }

  likeMovie(){
    this.flagLike = !this.flagLike;
    if (this.flagLike) this.colorLike = '#FFFFFF';
      else this.colorLike = 'green';
  }

  checkMovie(){
    let favoriteList = JSON.parse(localStorage.getItem('movie-list')??'[]');
    for (let i=0; i<favoriteList.length; i++){
      if(this.data.id == favoriteList[i].id){
        this.iconAdd = 'done';
        this.colorAdd = 'green';
        break;   // Si encuentra la pelicula rompe el ciclo
      }
      else {
        this.iconAdd = 'add';
        this.colorAdd = '#FFFFFF';
      }
    }
    if (favoriteList.length == 0){
      this.iconAdd = 'add';
      this.colorAdd = '#FFFFFF';
    }
  }
}
