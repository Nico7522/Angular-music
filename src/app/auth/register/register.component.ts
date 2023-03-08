import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm : FormGroup
  constructor(private _fb : FormBuilder, private _authService : AuthService, private _router : Router) {
    this.registerForm = this._fb.group({
      lastname: [null, Validators.required],
      firstname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]]
    })
  }

  createAccount() {
    if (this.registerForm.valid) {
      this._authService.register(this.registerForm.value).subscribe({
        next : (res) => {
          localStorage.setItem('token', res.result.token),
          localStorage.setItem('userId', res.result.user.id.toString()),
          localStorage.setItem('userRole', res.result.user.role)

          this._authService.connect()

        },
        error : (err) => {

        },

        complete: () => {
          this._router.navigateByUrl('/')
        }
      })
    } else {
      this.registerForm.markAllAsTouched()
    }
  }
}
