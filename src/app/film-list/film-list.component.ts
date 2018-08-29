import { Component, OnInit } from '@angular/core';
import { MovieDbService } from '../movie-db.service';

@Component({
    selector: 'app-film-list',
    templateUrl: './film-list.component.html',
    styleUrls: ['./film-list.component.css'],
})
export class FilmListComponent implements OnInit {

    films: Array<any>;
    titulo: String = "Listado de peliculas más vistas";
    constructor(private movieService: MovieDbService) { }

    ngOnInit() {
        console.log("Cargado FilmList");
        this.getFilms();
    }

    getFilms() {
        this.movieService.getFilms().subscribe(
            result => {
                this.films = result.results;
            },
            error => {
                console.log(error);
            }
        )

    }
}