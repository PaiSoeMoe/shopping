import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
import { SlideInOutAnimation } from 'src/app/animate';
import { select, NgRedux } from '@angular-redux/store';
import { SHOW_HIDE_SETTING, HIDE_SETTING, SHOW_REGISTER, HIDE_REGISTER } from "src/app/actions";
import { IAppState } from 'src/app/store';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  animations: [SlideInOutAnimation]
})
export class SettingComponent implements OnInit {

  constructor(private eRef: ElementRef, private ngRedux: NgRedux<IAppState>, public auth: AuthService) { }
  @HostListener('document:click', ['$event']) clickOut(e) {
    e.stopImmediatePropagation();
    if (this.eRef.nativeElement.contains(e.target)) {
      return;
    } else if (event.target) {
      this.ngRedux.dispatch({ type: HIDE_SETTING })
    }
    else {
      return;
    }
  }
  @Input("clickEvent") clickEvent;
  @select("settAnimateState") settAnimateState;

  ngOnInit() {

  }

  onClick(e) {
    e.stopPropagation()
    this.ngRedux.dispatch({ type: SHOW_HIDE_SETTING });
  }
  showRegister(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: SHOW_REGISTER })
  }

  showLogin(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: HIDE_REGISTER })
  }
}
