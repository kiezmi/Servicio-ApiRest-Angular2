import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from '../film-list/film-list.component';
import { FilmDetailsComponent } from "../film-details/film-details.component";
import { SeriesListComponent } from '../series-list/series-list.component';
import { SeriesDetailsComponent } from '../series-details/series-details.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
}, {
    path: 'FilmList',
    component: FilmListComponent,
}, {
    path: 'films/:id',
    component: FilmDetailsComponent,
},
{
    path: 'SeriesList',
    component: SeriesListComponent,
},
{
    path: 'series/:id',
    component: SeriesDetailsComponent,
},
{
    path: 'AboutUs',
    component: AboutUsComponent,
},
{ path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }