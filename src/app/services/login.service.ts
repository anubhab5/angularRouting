import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpSvc: HttpClient) { }

  login(loginCred) {
    return this.httpSvc.post("/api/auth", loginCred);
  }
}
