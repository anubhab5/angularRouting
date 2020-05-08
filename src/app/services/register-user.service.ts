import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private httpSvc: HttpClient) { }

  registerUser(userData) {
    return this.httpSvc.post("/api/user", userData);    
  }
}
