import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TO_CART } from '../actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>) { }
  item
  quantity = 1;
  index = 0;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let products = this.ngRedux.getState().products;
      let item = products.find((x) => {
        return x._id === params.get('id')
      });
      console.log(item);
      this.item = item;
      console.log(this.item);
    })
  }
  addToCart() {
    let item = Object.assign({}, this.item, { quantity: this.quantity });

    this.ngRedux.dispatch({ type: ADD_TO_CART, payload: item })
  }
  onSelect(e, i) {
    this.index = this.item.img.findIndex(x => i === x);
  }

}
