import { JsonPipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  flagAdd: boolean = true;
  colorAdd: string = '#000000'

  flagLike: boolean = true;
  colorLike: string = '#000000'

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

  addMovie(movie: any){
    console.log('Movie add');
    localStorage.setItem('movie', JSON.stringify(movie))
    this.flagAdd = !this.flagAdd;
    if (this.flagAdd) this.colorAdd = '#000000';
      else this.colorAdd = 'green';    
  }

  likeMovie(){
    this.flagLike = !this.flagLike;
    if (this.flagLike) this.colorLike = '#000000';
      else this.colorLike = 'green';
  }
}
