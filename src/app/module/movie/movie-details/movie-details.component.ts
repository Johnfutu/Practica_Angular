import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { apiService } from '../../services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';
import { MovieModel } from 'src/app/model/movie.model';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent extends BaseComponent <MovieModel.Movie> implements OnInit {

  movie!: MovieModel.Movie;
  readonly imgBaseUrl = ConstantUri.pathImg;
  override set setResponseService(val: MovieModel.Movie) {
    this.movie = val;
  }
  constructor(
    protected override readonly apiService: apiService<MovieModel.Movie>,
    private readonly activateRoute: ActivatedRoute,
    private readonly router: Router,
  ){
    super(apiService);
  }
  override ngOnInit(): void {
    this.activateRoute.params.subscribe((val: any) => {
      this.getMovieList(val.id);
    });
  }
   private getMovieList(mvoieid: string) {
    this.paramsConfig.url = ConstantUri.movieDetail + '/' + mvoieid;
    this.paramsConfig.params.api_key = ConstantUri.apikey;
    this.getRequest();
  }

  goBack(){
    this.router.navigate(['/populares']);
  }

}
