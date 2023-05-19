import { Component, OnInit } from '@angular/core';
import { properties } from '../../../assets/properties/properties';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { apiService } from '../services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  value1!: string
  formLogin: FormGroup = new FormGroup ({});
  logo = properties.logo;

 constructor (
  private fb: FormBuilder,
  private readonly ApiService: apiService<any>
 ) { }
 ngOnInit(): void {
  this.formLogin = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  })
 }

 login(){
    if (this.formLogin.invalid){
      this.formLogin.markAllAsTouched();
      for (const key in this.formLogin.controls){
        this.formLogin.controls[key].markAsDirty();
      }
      return;
    }

    const {username, password } = this.formLogin.value;

    const body = {
      username,
      password,
      requestoken: sessionStorage.getItem('requestToken')
    }

    const configPost = {ulr: ConstantUri.validateWithLogin, params:{api_Key: ConstantUri.apikey}, body} 
    this.ApiService.postService(configPost).subscribe(val =>{
      const { request_Token } = val;
      sessionStorage.setItem('requestToken', request_Token); 
    });


    console.log(this.formLogin.value);
 }
}
