import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AlwaysAuthGuardService implements CanActivate {

  constructor(private route: Router, private authSvc: AuthService) { }

  canActivate() {
    return this.authSvc.isUserValidated();
  }
}
