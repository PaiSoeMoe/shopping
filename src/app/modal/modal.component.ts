import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState, Product } from '../store';
import { HIDE_QUICK_VIEW, ADD_TO_CART } from '../actions';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @select("quickView") quickView;
  @select("modalItem") modalItem;

  constructor(private ngRedux: NgRedux<IAppState>, private toastr: ToastrService) { }

  ngOnInit() {

  }
  closeQv(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: HIDE_QUICK_VIEW });

  }
  addToCart(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: ADD_TO_CART, payload: this.ngRedux.getState().modalItem });
    this.toastr.success("Item added to cart.");
  }
}
