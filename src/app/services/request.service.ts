import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { generate, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  getMovies (genre: number){
    console.log();
    // https://api.themoviedb.org/3/movie/550?api_key=935cd375a182c346c1b3bf9134af5149
    return this.httpClient.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&language=es-MX&api_key=935cd375a182c346c1b3bf9134af5149`).pipe(
      map ((resp: any) => {
        return resp;
      })
    )
  }
}
