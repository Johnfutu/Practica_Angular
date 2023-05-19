import { Component, OnInit } from '@angular/core';
import { apiService } from '../services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{

  movie: any[] =[];

  constructor(
    private readonly apiService: apiService<any>,
  ) { }

  ngOnInit(): void {

    const getConfig= { url: ConstantUri.PopularMovie, params: {api_key: ConstantUri.apikey} };

    this.apiService.getService(getConfig).subscribe(val =>{
      const { request_Token } = val
     sessionStorage.setItem('requestToken', request_Token); 
    });
  }

  seeDetail() {

  }
}
