import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPayload } from '../login-payload';
import { AuthService } from 'src/app/service/auth.service';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPayload;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
    this.loginPayload = {
      username: '',
      password: ''
    };
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    this.authService.login(this.loginPayload).subscribe(data => {
      if (data) {
        console.log('login success');
        //this.router.navigateByUrl('/home');
      } else {
        console.log('Login failed');
      }
    });
  }
}
