import { NgModule } from '@angular/core';
import { MovieComponent } from './movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieRoutingModule } from './movie.routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailsComponent,
  ],
  imports: [
    MovieRoutingModule,
    CardModule,
    ButtonModule,
    CommonModule,
    TagModule,
    ProgressSpinnerModule
  ],
  providers: [],
})
export class MovieModule { }
