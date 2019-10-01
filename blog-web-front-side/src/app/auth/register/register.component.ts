import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';
import { RegisterPayload } from '../register-payload';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerPayload: RegisterPayload;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: ''
    });
    this.registerPayload = {
      fullname: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: ''
    };
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.registerPayload.fullname = this.registerForm.get('fullname').value;
    this.registerPayload.username = this.registerForm.get('username').value;
    this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword').value;
    this.registerPayload.gender = this.registerForm.get('gender').value;
    console.log(this.registerPayload)
    this.authService.register(this.registerPayload).subscribe(data => {
      console.log('register succes');
      this.router.navigateByUrl('/register-success');
    }, error => {
      console.log('register failed : ' + error);
    });
  }
}
