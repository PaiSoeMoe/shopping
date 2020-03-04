import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [{ path: "", component: HomeComponent },
{ path: "cart", component: CartPageComponent },
{ path: "products/:cat/:subcat/:id", component: ProductDetailComponent },
{ path: "login-register", component: LoginRegisterComponent },
{ path: "my-account", component: MyAccountComponent, canActivate: [AuthGuard] },
{ path: "products/men/all", component: ProductsComponent },
{ path: "products/men/20-discount", component: ProductsComponent },
{ path: "products/men/buy-one-get-one", component: ProductsComponent },
{ path: "products/men/hoodies-sweatshirts", component: ProductsComponent },
{ path: "products/men/jackets-outerwear", component: ProductsComponent },
{ path: "products/men/denim-jeans", component: ProductsComponent },
{ path: "products/men/graphic-tees", component: ProductsComponent },
{ path: "products/men/tops", component: ProductsComponent },
{ path: "products/men/shoes", component: ProductsComponent },
{ path: "products/men/bags-backpacks", component: ProductsComponent },
{ path: "products/men/sunglasses", component: ProductsComponent },
{ path: "products/men/hats-beanies", component: ProductsComponent },
{ path: "products/women/all", component: ProductsComponent },
{ path: "products/women/new-arrival", component: ProductsComponent },
{ path: "products/women/20-discount", component: ProductsComponent },
{ path: "products/women/buy-one-get-one", component: ProductsComponent },
{ path: "products/women/tops", component: ProductsComponent },
{ path: "products/women/dresses", component: ProductsComponent },
{ path: "products/women/jackets-outerwear", component: ProductsComponent },
{ path: "products/women/denim-jeans", component: ProductsComponent },
{ path: "products/women/lingerie-sleepwear", component: ProductsComponent },
{ path: "products/women/rompers-jumpsuits", component: ProductsComponent },
{ path: "products/women/shoes", component: ProductsComponent },
{ path: "products/women/bags-backpacks", component: ProductsComponent },
{ path: "products/women/sunglasses", component: ProductsComponent },
{ path: "products/women/socks-tights", component: ProductsComponent },
{ path: "products/shoes/all", component: ProductsComponent },
{ path: "products/accessories/all", component: ProductsComponent },
{ path: "products/new-arrival/all", component: ProductsComponent },

{ path: "checkout", component: CheckoutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

