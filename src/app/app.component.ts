import { Component } from '@angular/core';
import { apiService } from './module/services/api.service';
import { ConstantUri } from './utils/constantUri';
import { BaseComponent } from './shared/base/base.component';
import { LoginNameSpace } from './model/login.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent<LoginNameSpace.Login>{
  override set setResponseService({request_token}: LoginNameSpace.Login) {
    sessionStorage.setItem('requestToken', request_token); 
  }
  constructor(
    protected override readonly apiService: apiService<LoginNameSpace.Login>
  ) {

    super(apiService);
    this.paramsConfig.url = ConstantUri.tokenNew;
    this.paramsConfig.params.api_key = ConstantUri.apikey;
    this.getRequest();
  }
  title = 'movies';
}
