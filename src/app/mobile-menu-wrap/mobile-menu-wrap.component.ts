import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from 'src/app/animate';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { SHOW_MOBILE_MENU } from '../actions';
@Component({
  selector: 'app-mobile-menu-wrap',
  templateUrl: './mobile-menu-wrap.component.html',
  styleUrls: ['./mobile-menu-wrap.component.css'],
  animations: [SlideInOutAnimation]
})
export class MobileMenuWrapComponent implements OnInit {
  @select('showMobileMenu') showMobileMenu;
  data = [
    { topNavLink: "New Arrival", children: false },
    {
      topNavLink: "Men", link: "#", active: false, aniState: "out", children: true,
      subs: [
        { sub: "Special Offers", active: false, items: [{ name: '1' }, { name: '2' }] },
        { sub: "Shop By Category", active: false, items: [{ name: '1' }, { name: '2' }] }
      ]
    },
    {
      topNavLink: "Women", link: "#", active: false, children: true,
      subs: [
        { sub: "Special Offers", active: false, items: [{ name: '1' }, { name: '2' }] },
        { sub: "Shop By Category", active: false, items: [{ name: '1' }, { name: '2' }] }
      ]
    },
    { topNavLink: "Shoes", children: false },
    { topNavLink: "Accessories", children: false }
  ]

  curlang = {
    language: false,
    currency: false,
    account: false
  }
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() { }
  onClick(e, name, sub) {
    e.stopPropagation();
    if (sub === false) {
      this.data.map(x => {
        if (x.topNavLink === name) {
          x.active = !x.active;
          if (x.active === false) {
            if (x.subs) {
              x.subs.map(xs => { xs.active = false })
            }
          }
        } else {
          x.active = false;
          if (x.subs) {
            x.subs.map(xs => { xs.active = false })
          }
        }
      })
    }
    else {
      this.data.map(x => {
        if (x.active === true) {
          x.subs.map(xs => {
            if (xs.sub === name) {
              xs.active = !xs.active;
            }
          })
        }
      })
    }

  }
  toggle(e, i) {
    e.stopPropagation();
    for (let key of Object.keys(this.curlang)) {
      if (i === key) {
        this.curlang[key] = !this.curlang[i];
      } else {

        this.curlang[key] = false;
      }

    }
  }
  closeMenu(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: SHOW_MOBILE_MENU });
  }
}
