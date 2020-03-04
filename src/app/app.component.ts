import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { SHOW_HIDE_FILTER } from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping';
  constructor(private ngRedux: NgRedux<IAppState>) {

  }
  @select("filter") filter

  closeFilter(e) {
    e.stopPropagation()
    this.ngRedux.dispatch({ type: SHOW_HIDE_FILTER });
  }

}

