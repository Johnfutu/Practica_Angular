import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/login/login.component';

const routes: Routes = [
  {
    path: 'Iniciar-sesion',
    component: LoginComponent
  },
  {
    path: 'populares',
    loadChildren: () => import('../app/module/movie/movie.routing.module').then(val => val.MovieRoutingModule)
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
