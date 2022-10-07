import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestService } from 'src/app/services/request.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})
export class AdventureComponent implements OnInit {

  movies: any[] = [];
  showFiller: boolean = true;

  horror: number = 12;

  constructor(public requestService: RequestService, public dialog: MatDialog){}

  ngOnInit (){
    this.requestService.getMovies(this.horror).subscribe({
      next: resp => {
        this.movies = resp.results;
        console.log('API ',this.movies);
      }
    })
  }

  openDialog(movie: any[]): void {
    this.dialog.open(DialogComponent, {data: movie});  
  }

}
