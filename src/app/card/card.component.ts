import { Component, OnInit, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { SHOW_QUICK_VIEW, ADD_TO_CART } from '../actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input("product") product

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {

  }
  showQV(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: SHOW_QUICK_VIEW, payload: this.product });
  }
  addToCart(e) {
    e.stopPropagation();
    let product = Object.assign({}, this.product, { quantity: 1 })
    this.ngRedux.dispatch({ type: ADD_TO_CART, payload: product });
  }
}
