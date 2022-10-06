import { JsonPipe } from '@angular/common';
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

  flagLike: boolean = true;
  colorLike: string = '#FFFFFF'

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

  addMovie(movie: any){
    console.log('Movie add');
    localStorage.setItem('movie', JSON.stringify(movie))
    this.flagAdd = !this.flagAdd;
    if (this.flagAdd) this.colorAdd = '#FFFFFF';
      else this.colorAdd = 'green';    
  }

  likeMovie(){
    this.flagLike = !this.flagLike;
    if (this.flagLike) this.colorLike = '#FFFFFF';
      else this.colorLike = 'green';
  }
}
