import { NgModule } from '@angular/core';
import { MovieComponent } from './movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieRoutingModule } from './movie.routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailsComponent,
  ],
  imports: [
    MovieRoutingModule,
    CardModule,
    ButtonModule
  ],
  providers: [],
})
export class MovieModule { }
