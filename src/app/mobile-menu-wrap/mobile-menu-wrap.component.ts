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
    {
      topNavLink: "Men",
      link: "products/men/all",
      active: false,
      children: true,
      subs: [
        {
          sub: "Special Offers",
          link: "special-offers",
          active: false,
          items: [{
            name: "20% Discount",
            link: "products/men/20-discount"
          }, {
            name: "Buy one get one",
            link: "products/men/buy-one-get-one"
          }]
        },
        {
          sub: "Clothing",
          link: "clothing",
          active: false,
          items: [{
            name: "New Arrival",
            link: "products/men/new-arrival"
          },
          {
            name: "Hoodies & Sweatshirts",
            link: "products/men/hoodies-sweatshirts"
          }, {
            name: "Jackets & Outerwear",
            link: "products/men/jackets-outerwear"
          }, {
            name: "Denim & Jeans",
            link: "products/men/denim-jeans"
          }, {
            name: "Graphic Tees",
            link: "products/men/graphic-tees"
          }, {
            name: "Tops",
            link: "products/men/tops"
          }
          ]
        },
        {
          sub: "Accessories",
          link: "accessories",
          active: false,
          items: [
            {
              name: "Shoes",
              link: "products/men/shoes"
            },
            {
              name: "Hats & Beanies",
              link: "products/men/hats-beanies"
            },
            {
              name: "Bags & Backpacks",
              link: "products/men/bags-backpacks"
            },
            {
              name: "Sunglasses",
              link: "products/men/sunglasses"
            }
          ]
        }
      ]
    },
    {
      topNavLink: "Women",
      active: false,
      link: "products/women/all",
      children: true,
      subs: [
        {
          sub: "Special Offers",
          link: "special-offers",
          active: false,
          items: [{
            name: "20% Discount",
            link: "products/women/20-discount"
          }, {
            name: "Buy one get one",
            link: "products/women/buy-one-get-one"
          }]
        },
        {
          sub: "Clothing",
          link: "clothing",
          active: false,
          items: [{
            name: "New Arrival",
            link: "products/women/new-arrival"
          },
          {
            name: "Tops",
            link: "products/women/tops"
          },
          {
            name: "Dresses",
            link: "products/women/dresses"
          },
          {
            name: "Jackets & Outerwear",
            link: "products/women/jackets-outerwear"
          },
          {
            name: "Denim & Jeans",
            link: "products/women/denim-jeans"
          },
          {
            name: "Lingerie & Sleepwear",
            link: "products/women/lingerie-sleepwear"
          },
          {
            name: "Rompers & Jumpsuits",
            link: "products/women/rompers-jumpsuits"
          }
          ]
        }, {
          sub: "Accessories",
          link: "accessories",
          active: false,
          items: [
            {
              name: "Shoes",
              link: "products/women/shoes"
            },
            {
              name: "Bags & Backpacks",
              link: "products/women/bags-backpacks"
            },
            {
              name: "Sunglasses",
              link: "products/women/sunglasses"
            }
          ]
        }
      ]
    },
    { topNavLink: "Shoes", link: "products/shoes/all", children: false },
    { topNavLink: "Accessories", link: "products/accessories/all", children: false }]

  datas = [
    { topNavLink: "New Arrival", children: false },
    {
      topNavLink: "Men",
      link: "#",
      active: false,
      children: true,
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
