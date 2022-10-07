import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { generate, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  token: string = '935cd375a182c346c1b3bf9134af5149'
  constructor(private httpClient: HttpClient) { }

  getMovies (genre: number){
    console.log();
    return this.httpClient.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&language=es-MX&api_key=${this.token}`).pipe(
      map ((resp: any) => {
        return resp;
      })
    )
  }
}
