import { Component } from '@angular/core';
import { RequestService } from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'materialTest';

  movies: any[] = [];
  showFiller: boolean = true;
  constructor(public requestService: RequestService){}

  ngOnInit (){
    this.requestService.getMovies().subscribe({
      next: resp => {
        this.movies = resp.results;
        console.log('API ',this.movies);
      }
    })
  }
}
