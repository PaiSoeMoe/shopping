import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { Product, IAppState } from 'src/app/store'
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';
import { SET_PRODUCTS, SHOW_HIDE_FILTER } from 'src/app/actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private ngRedux: NgRedux<IAppState>, private route: ActivatedRoute, private http: HttpService) { }

  pageNo = 1;
  colors
  sizes
  products;
  paginatedProducts;
  pages;
  cat
  subcat
  tags = [];
  onSale;
  inStock;
  @select("filter") filter
  ngOnInit() {
    this.route.url.subscribe(v => {
      this.pageNo = 1;
      this.cat = v[1];
      this.subcat = v[2];
      this.http.getProduct(this.cat, this.subcat).subscribe((x) => {
        this.ngRedux.dispatch({ type: SET_PRODUCTS, payload: x })
        this.products = this.ngRedux.getState().products
        this.sizes = this.counter(this.products, 'size');
        this.colors = this.counter(this.products, 'color');
        this.onSale = this.products.filter(x => x.onsale === true).length;
        this.inStock = this.products.filter(x => x.instock === true).length;
        this.init();
      });
    })
  }

  counter(products, name) {
    let obj = {};
    products.map(x => {
      x[name].map(s => {
        obj[s] = obj[s] ? obj[s] + 1 : 1;
      })
    })
    return obj;
  }


  onChange(e) {
    this.tags = [this.cat];
    this.tags = this.tags.concat(this.subcat);
    this.pageNo = 1;
    let products = this.ngRedux.getState().products;
    let filteredProducts = [];

    for (let i of Object.keys(e.value)) {

      if (typeof (e.value[i]) === "boolean" || typeof (e.value[i]) === "string") {
        if (filteredProducts.length === 0) {
          filteredProducts = this.checkBoolean(i, e.value[i], products);
        }
        filteredProducts = this.checkBoolean(i, e.value[i], filteredProducts);
      }
      else if (typeof (e.value[i]) === "object") {
        filteredProducts = this.checkObj(i, e.value[i], filteredProducts);
        this.tagList(e.value[i]);
      }
    }
    this.products = filteredProducts
    this.pages = Array.from({ length: Math.ceil(filteredProducts.length / 12) }, (v, k) => k + 1);
    this.pagination(this.pageNo)
  }

  init() {
    this.pagination(this.pageNo);
    this.pages = Array.from({ length: Math.ceil(this.products.length / 12) }, (v, k) => k + 1);
    this.tags = [this.cat];
    this.tags = this.tags.concat(this.subcat);

  }
  checkBoolean(key, value, products) {
    if (!value) {
      return products;
    }
    this.tags = this.tags.concat(key);
    return products.filter(p => p[key] === true);
  }

  checkObj(key, group, products) {
    let filteredProducts = [];
    let filter = 0;
    for (let i of Object.keys(group)) {
      if (group[i]) {
        filteredProducts = filteredProducts.concat(products.filter(p => p[key].includes(i) && !filteredProducts.includes(p)));
        filter += 1;
      }
    }
    if (filter === 0) {
      return products;
    }
    return filteredProducts;
  }

  pagination(pageNo) {
    this.paginatedProducts = this.products.slice((pageNo - 1) === 0 ? 0 : (((pageNo - 1) * 12)), ((pageNo * 12)));
    this.pageNo = pageNo;
  }

  tagList(group) {
    for (let i of Object.keys(group)) {
      if (group[i] === true) {
        this.tags = this.tags.concat(i);
      }
    }
  }

  showFilter(e) {
    e.stopPropagation();
    this.ngRedux.dispatch({ type: SHOW_HIDE_FILTER });
  }

  onReset(e) {
    this.paginatedProducts = this.ngRedux.getState().products

  }

  next(e) {
    e.stopPropagation();
    if (this.pageNo < 3) {
      this.pageNo += 1
      this.pagination(this.pageNo);
    } else {
      return
    }
  }
  prev(e) {
    e.stopPropagation();
    if (this.pageNo > 1) {
      this.pageNo -= 1
      this.pagination(this.pageNo);
    } else {
      return
    }
  }


}


