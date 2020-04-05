import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { select } from '@angular-redux/store';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @select("cart") cart
  @select("cartTotal") cartTotal
  @select("currency") currency
  show = false;
  error = false;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  showLogin() {
    this.show = !this.show;
  }
  onLogin(n, p) {
    this.auth.onLogin(n, p).subscribe(result => {
      if (result) {
        this.showLogin();
      }
    }, err => {
      this.error = true;
    });
  }

}
