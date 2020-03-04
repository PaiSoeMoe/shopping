import { Component, OnInit, Output, Input } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { EventEmitter } from '@angular/core';
import { IAppState } from '../store';
import { SHOW_HIDE_FILTER } from '../actions';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output("filter") filter = new EventEmitter();
  @select("filter") fil;
  @Input('colors') colors
  @Input('tags') tags;
  @Input("sizes") sizes;
  @Input("onSale") onSale;
  @Input("inStock") inStock;
  @Output("reset") reset = new EventEmitter();

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
  onChange(e, m) {
    e.stopPropagation()
    this.filter.emit(m)
  }
  closeFilter(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: SHOW_HIDE_FILTER });
  }
  onReset(e) {
    e.stopPropagation();
    this.reset.emit();
  }
}
