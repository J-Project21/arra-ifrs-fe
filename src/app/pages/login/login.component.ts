import { NzMessageService } from 'ng-zorro-antd/message';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;
  isSubmitted = false;
  expired: boolean = false;
  passwordIconType = 'eye';
  passwordInputType = 'password';

  constructor(
    private notification: NzMessageService,
    private fb: FormBuilder,
    private router: Router,
    private authentication: AuthService
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  handlePasswordIconClick() {
    console.log('icon clicked');
    this.passwordInputType =
      this.passwordInputType == 'password' ? 'text' : 'password';
    this.passwordIconType =
      this.passwordIconType == 'eye' ? 'eye-invisible' : 'eye';
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.isSubmitted = true;
      let loadingRef = this.notification.loading('Logging in please wait...');
      let loginProcess$ = this.requestLogin();

      loginProcess$.subscribe({
        next: (res) => {
          console.log(res.menu);
          if (this.expired) {
            this.router.navigateByUrl('/changepassword');
            this.notification.error(
              'Password has expired. Please consider to change password!'
            );
          } else {
            localStorage.setItem('menu', JSON.stringify(res.menu));
            this.router.navigateByUrl('/');
          }
        },
        error: (err) => {
          this.isSubmitted = false;
          this.notification.remove(loadingRef.messageId);
          this.notification.error(err.error.errors);
        },
        complete: () => {
          this.isSubmitted = false;
          this.notification.remove(loadingRef.messageId);
          this.notification.info('Logged in successfully!');
        },
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  requestLogin(): Observable<any> {
    return this.authentication.requestLogin(this.validateForm.value).pipe(
      switchMap((usr) => {
        localStorage.setItem('username', usr.userName);
        localStorage.setItem('group', usr.groupName);
        localStorage.setItem('token', usr.token);
        this.expired = usr.expired;
        return this.authentication.getAllMenu().pipe(
          map((menu) => ({
            ...usr,
            menu,
          }))
        );
      })
    );
  }
}
