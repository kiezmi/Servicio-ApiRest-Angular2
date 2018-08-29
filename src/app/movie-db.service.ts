import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieDbService {

  constructor(private http: HttpClient) { }
  public getFilms():Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES');
  }

  public getFilm(id:number):Observable<any>{
        return this.http.get<any>('https://api.themoviedb.org/3/movie/'+id+'?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES')
  }

  public getSeries():Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/tv/popular?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES')
  }
  public getSerie(id:number):Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/tv/'+id+'?api_key=81aca90227197885e3861bf1d2e1acd1&language=es-ES')
}


}
