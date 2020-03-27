import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TO_CART } from '../actions';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>, private toastr: ToastrService) { }
  item
  quantity = 1;
  index = 0;
  colors = {
    Black: '#000000',
    Brown: '#A52A2A',
    Blue: '#0000FF',
    Denim: '#2662ac',
    Gray: '#D3D3D3',
    Green: '#008000',
    Gold: '#FFD700',
    Multi: 'Multi Color',
    Navy: '#000080',
    Pink: '#FFC0CB',
    White: '#FFFFFF',
    Orange: '#FFA500',
    Red: '#8B0000',
    Sage: '#77815c'
  }
  color;


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let products = this.ngRedux.getState().products;
      let item = products.find((x) => {
        return x._id === params.get('id')
      });
      console.log(item);
      this.item = item;
      let c = '' + item.color[0];
      console.log(item.color[0]);
      this.color = this.colors[c]
    })
  }
  addToCart(e) {
    e.stopPropagation();
    let item = Object.assign({}, this.item, { quantity: this.quantity });

    this.ngRedux.dispatch({ type: ADD_TO_CART, payload: item })
    this.toastr.success("Item added to cart.");
  }
  onSelect(e, i) {
    this.index = this.item.img.findIndex(x => i === x);
  }

}
