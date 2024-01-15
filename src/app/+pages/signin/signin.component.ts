import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { BackendSecurityService } from '../+services/backend-security.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressBarModule,
    CommonModule

  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  isBusy: boolean = false;
  router = inject(Router);
  ok: boolean = false;
  keepMe: boolean = false;
  // backend = inject(BackendService);
  message: string = '';
  constructor(private backend: BackendSecurityService) { }
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  signin() {
    this.isBusy = true;
    let username: string | undefined = this.username.value?.toString();
    let password: string | undefined = this.password.value?.toString();
    this.backend.signin(username ?? '', password ?? '').subscribe(result => {
      let res = result as any;
      if (res.isOk == false) {
        this.message = (result as any).message;

      }
      else {
        sessionStorage.setItem('token', res.token)

        if (this.keepMe == true) {
          localStorage.setItem('token', res.token)
        }
        switch (res.type) {
          case 'SystemAdmin':
            this.router.navigate(['admins'])
        }
        switch (res.type) {
          case 'Customer':
            this.router.navigate(['customers'])
        }
        switch (res.type) {
          case 'RestaurantOwner':
            this.router.navigate(['restaurants'])
        }
      }
      this.isBusy = false;
    });


  }
  signup() {
    this.router.navigate(['/signup'])
  }

}
