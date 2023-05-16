import { Component, OnInit } from '@angular/core';
import { properties } from '../../../assets/properties/properties';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    console.log(this.formLogin.value);
 }
}
