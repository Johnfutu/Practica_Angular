import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantUri } from 'src/app/utils/constantUri';
import { MoviesModule, } from '../../model/movies.model';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { apiService } from '../services/api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent extends BaseComponent<MoviesModule.MoviesResponse> implements OnInit{

  movies: MoviesModule.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
    release: '',
    vote: 0,
    popularity: 0,
    id: 0,
    overview: 0
  };


  imgBaseUrl = ConstantUri.pathImg;
  override set setResponseService(val: MoviesModule.MoviesResponse ){
    this.movies = val;
  }
  constructor(
    private readonly router: Router,
    protected override  apiService: apiService<MoviesModule.MoviesResponse>
  ) {
    super(apiService);
  }

  override ngOnInit(): void {
    this.paramsConfig.url = ConstantUri.PopularMovie;
    this.paramsConfig.params.api_key = ConstantUri.apikey;
    this.getRequest();
  }

  seeDetail(id: number) {
    this.router.navigate([`populares/detalle/${id}`]);
  }
}
