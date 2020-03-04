import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { HIDE_CART, SHOW_HIDE_CART, REMOVE_FROM_CART } from "src/app/actions";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @HostListener('document:click', ['$event']) clickOut(e) {
    e.stopPropagation();
    if (this.eRef.nativeElement.contains(e.target)) {
      return;
    } else if (event.target) {
      this.ngRedux.dispatch({ type: HIDE_CART })
    }
    else {
      return;
    }
  }
  @select("cartShow") show
  constructor(private eRef: ElementRef, private ngRedux: NgRedux<IAppState>) { }

  @select("cart") cart
  @select("cartTotal") cartTotal

  ngOnInit() {
  }
  onClose(e) {
    e.preventDefault();
    e.stopPropagation();
    this.ngRedux.dispatch({ type: HIDE_CART })
  }
  onClick(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: SHOW_HIDE_CART })
  }
  removeItem(e, id) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: REMOVE_FROM_CART, payload: id })
  }

}
