import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    mobile: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // let body = new HttpParams({
    //   fromObject: {
    //     username: this.loginForm.get('username').value,
    //     password: this.loginForm.get('password').value
    //   }
    // });
    // body.set('username', this.loginForm.get('username').value)
    // body.set('password', this.loginForm.get('password').value);
    // const body = 'mobile=' + this.loginForm.get('mobile').value + '&password=' + this.loginForm.get('password').value;

    const body = {
      mobile: this.loginForm.get('mobile').value,
      password: this.loginForm.get('password').value
    }
    console.log('body ', body);
    this.loginService.loginUser(body).subscribe((res: any) => {
      console.log(res)
      if (res.access_key) {
        localStorage.setItem('token', res.access_key);
        this.router.navigate(['/dashboard']);
      }
    });
  }

  gotoRegister() {
    this.router.navigateByUrl('/register');

  }

}
