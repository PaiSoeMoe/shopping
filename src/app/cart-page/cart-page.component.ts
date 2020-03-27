import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { CLEAR_SHOPPING_CART, REMOVE_FROM_CART } from "src/app/actions";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  @select("cart") cart
  @select("cartTotal") cartTotal
  @select("currency") currency
  constructor(private ngRedux: NgRedux<IAppState>, private toastr: ToastrService) { }

  ngOnInit() {
  }
  clearCart(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: CLEAR_SHOPPING_CART })
  }

  removeItem(e, id) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: REMOVE_FROM_CART, payload: id })
    this.toastr.success("Item removed.")
  }

}
