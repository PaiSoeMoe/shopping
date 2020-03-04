import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { TAB_CHANGE } from '../actions'

@Component({
  selector: 'app-product-area',
  templateUrl: './product-area.component.html',
  styleUrls: ['./product-area.component.css']
})
export class ProductAreaComponent implements OnInit {

  @select('tabs') tabs


  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
  tabChange(e, tab) {
    e.stopPropagation()
    this.ngRedux.dispatch({ type: TAB_CHANGE, data: tab })
  }
}
