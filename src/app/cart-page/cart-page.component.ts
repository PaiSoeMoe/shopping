import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { CLEAR_SHOPPING_CART } from "src/app/actions";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  @select("cart") cart
  @select("cartTotal") cartTotal
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
  clearCart(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: CLEAR_SHOPPING_CART })
  }

}
