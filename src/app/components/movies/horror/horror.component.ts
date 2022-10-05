import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RequestService } from 'src/app/services/request.service';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-horror',
  templateUrl: './horror.component.html',
  styleUrls: ['./horror.component.scss']
})
export class HorrorComponent implements OnInit {

  movies: any[] = [];
  showFiller: boolean = true;

  constructor(public requestService: RequestService, public dialog: MatDialog){}

  ngOnInit (){
    this.requestService.getMovies().subscribe({
      next: resp => {
        this.movies = resp.results;
        console.log('API ',this.movies);
      }
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, movie: any[]): void {
    this.dialog.open(Dialog, {
      width: '600px',
      height: '300px',
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

}

@Component({
  selector: 'dialog',
  templateUrl: './dialog.html',
})
export class Dialog {
  constructor(public dialogRef: MatDialogRef<Dialog>) {}
}