import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './module/login/login.component';
import { MoviesGuard } from './guards/movies.guard';

const routes: Routes = [
  {
    path: 'Iniciar-sesion',
    component: LoginComponent
  },
  {
    path: 'populares',
    loadChildren: () => import('../app/module/movie/movie.routing.module').then(val => val.MovieRoutingModule),
    canActivate: [MoviesGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'iniciar-sesion '
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
