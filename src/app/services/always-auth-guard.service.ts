import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlwaysAuthGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    console.log("AlwaysAuthGuard");
    return true;
  }
}
