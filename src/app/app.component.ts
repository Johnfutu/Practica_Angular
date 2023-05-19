import { Component } from '@angular/core';
import { apiService } from './module/services/api.service';
import { ConstantUri } from './utils/constantUri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private apiService: apiService<any>
  ) {

    const getConfig = { url: ConstantUri.tokenNew, params: {api_key: ConstantUri.apikey} }
    this.apiService.getService(getConfig).subscribe(val =>{
      const { request_Token } = val
     sessionStorage.setItem('requestToken', request_Token); 
    });
  }
  title = 'movies';
}
