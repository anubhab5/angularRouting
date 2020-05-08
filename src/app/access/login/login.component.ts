import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private fb: FormBuilder, private loginSvc: LoginService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = this.createLoginForm();
  }

  createLoginForm() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.loginSvc.login(this.loginForm.value)
      .subscribe(
        (resp: any) => {
          sessionStorage.setItem("currentUser", JSON.stringify(resp.token));
          this.route.navigate(['/viewProduct']);
        },
        err => {
          console.log(err);
        }
      );
  }

}
