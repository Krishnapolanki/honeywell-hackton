import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/shared/auth.service';
import { AuthState } from 'src/app/shared/store/auth/auth/auth.classes';
import { Login } from 'src/app/shared/store/auth/auth/state/auth.action';
import { getLoggedIn } from 'src/app/shared/store/auth/auth/state/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loggedIn$;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) {
    this.loggedIn$ = this.store.pipe(select(getLoggedIn));
    this.loggedIn$
      .pipe(
        map((isSuccess) => {
          if (isSuccess) this.router.navigate(['products']);
        })
      )
      .subscribe();
  }

  public get UserName() {
    return this.form.get('userName');
  }

  public get Password() {
    return this.form.get('password');
  }

  ngOnInit() {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onFormSubmit() {
    if (this.form.valid) {
      this.store.dispatch(
        new Login({
          userName: this.UserName.value,
          password: this.Password.value,
        })
      );
    }
  }
}
