import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  isUserValidated() {
    let val = sessionStorage.getItem('currentUser');
    debugger
    if (sessionStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  navigateOnValidity() {
    if (this.isUserValidated()) this.route.navigate(['/viewProduct']);
    else this.route.navigate(['/login']);
  }
}
