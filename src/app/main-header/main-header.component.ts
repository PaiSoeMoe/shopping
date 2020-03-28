import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/store';
import { SHOW_MOBILE_MENU } from 'src/app/actions';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IAppState>) { }
  ngOnInit() {

  }
  slideMenu(e) {
    e.stopPropagation()
    this.ngRedux.dispatch({ type: SHOW_MOBILE_MENU })
  }
}
