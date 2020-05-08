import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterUserService } from 'src/app/services/register-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm;

  constructor(private fb: FormBuilder, private registerUserSvc: RegisterUserService) { }

  ngOnInit(): void {
    this.registerForm = this.createRegisterForm();
  }

  createRegisterForm() {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submiteValue() {
    this.registerUserSvc.registerUser(this.registerForm.value)
      .subscribe(resp => {
        debugger
      },
        err => {
          debugger
        });
  }

}
