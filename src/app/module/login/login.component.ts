import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { properties } from '../../../assets/properties/properties';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiService } from '../services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { LoginNameSpace } from 'src/app/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent<LoginNameSpace.Login> implements OnInit {
  value1!: string
  logo = properties.logo;
  formLogin: FormGroup = new FormGroup ({});
  router: any;
  override set setResponseService({request_token}: LoginNameSpace.Login) {
    sessionStorage.setItem('requestToken', request_token); 
    sessionStorage.setItem('LoginFlag', 'true'); 
    this.router.navigate(['populares'])
  }

 constructor (
  private fb: FormBuilder,
  protected override readonly apiService: apiService<LoginNameSpace.Login>
 ) { 
  super(apiService);
 }
 override ngOnInit(): void {
  this.formLogin = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
 }

 login() {
  if (this.isFormInvalid(this.formLogin)) return;

    const {username, password } = this.formLogin.value;

    const body = {
      username,
      password,
      requestoken: sessionStorage.getItem('requestToken')
    }

    this.paramsConfig.url =  ConstantUri.validateWithLogin;
    this.paramsConfig.params =  {api_Key: ConstantUri.apikey};
    this.paramsConfig.body =  body;
    this.postRequest();
 }
}
