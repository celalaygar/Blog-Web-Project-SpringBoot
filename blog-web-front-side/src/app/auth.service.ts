import { Injectable } from '@angular/core';
import { RegisterPayload } from './auth/register-payload';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8182/api/auth/';
  constructor(private httpClient: HttpClient) { }



  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerPayload);
  }
}
