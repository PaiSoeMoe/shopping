import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { SHOW_REGISTER, HIDE_REGISTER } from '../actions';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  @select('register') register;
  constructor(private ngRedux: NgRedux<IAppState>, private router: Router, private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  showRegister(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: SHOW_REGISTER })
  }

  showLogin(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: HIDE_REGISTER })
  }

  onLogin(e, name, password) {
    e.stopPropagation();
    this.auth.onLogin(name, password)
      .subscribe(result => {
        if (result) {
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        } else {
        }
      });;
  }

  onRegister(e, name, password, email) {
    e.stopPropagation();
    this.auth.onRegister(name, password, email)
      .subscribe((x) => console.log(x));
  }


}
