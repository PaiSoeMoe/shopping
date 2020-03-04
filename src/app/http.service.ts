import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getProduct(cat, subcat, id: string = 'undefined') {
    let params = new HttpParams().set('category', cat);
    params = params.append('subcategory', subcat);
    params = params.append("id", id);
    let httpOptions = {
      params: params
    }
    if (localStorage.getItem("x-auth-token")) {
      let head = {
        headers: new HttpHeaders({
          "x-auth-token": localStorage.getItem('x-auth-token')
        })
      }
      httpOptions = Object.assign({}, httpOptions, head)
    }
    console.log(httpOptions);

    return this.http.get("http://localhost:3000/" + cat, httpOptions)
  }

  register(user) {
    return this.http.post("http://localhost:3000/register", user);
  }

  login(user) {

    return this.http.post("http://localhost:3000/login", user).pipe(map(x => {
      if (x) {
        console.log(x);
        localStorage.setItem(Object.keys(x)[0], x[Object.keys(x)[0]]);
        return true;
      } else {
        return false;
      }
    }
    ))
  }

}
