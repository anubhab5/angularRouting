import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth-services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-core-self-practice';

  constructor(private authSvc: AuthService) { }
  
  ngOnInit(): void {   
    this.authSvc.navigateOnValidity();
  }

  logout(){
    sessionStorage.clear();
    this.authSvc.navigateOnValidity();
  }
}
