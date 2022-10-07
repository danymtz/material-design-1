import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestService } from 'src/app/services/request.service';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-crime',
  templateUrl: './crime.component.html',
  styleUrls: ['./crime.component.scss']
})
export class CrimeComponent implements OnInit {

  movies: any[] = [];
  showFiller: boolean = true;

  horror: number = 80;

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
