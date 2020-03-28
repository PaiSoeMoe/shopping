import { BrowserModule } from "@angular/platform-browser";
import { NgModule, isDevMode } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderComponent } from "./header/header.component";
import { MainHeaderComponent } from "./header/main-header/main-header.component";
import { MainNavComponent } from "./header/main-header/main-nav/main-nav.component";
import { NgReduxModule, NgRedux, DevToolsExtension } from "@angular-redux/store";
import { IAppState, rootReducer, INITIAL_STATE } from "./store";
import { CartComponent } from './cart/cart.component';
import { SettingComponent } from './setting/setting.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SearchComponent } from './header/main-header/search/search.component';
import { HomeComponent } from './home/home.component';
import { MobileMenuWrapComponent } from './mobile-menu-wrap/mobile-menu-wrap.component';
import { ToastrModule } from 'ngx-toastr'
import { SliderComponent } from './slider/slider.component';
import { BannerAreaComponent } from './banner-area/banner-area.component';
import { CardComponent } from './card/card.component';

import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from "@angular/forms";
import { ModalComponent } from './modal/modal.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HttpClientModule } from "@angular/common/http";
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { LoginRegisterComponent } from './login-register/login-register.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainHeaderComponent,
    MainNavComponent,
    CartComponent,
    SettingComponent,
    SearchComponent,
    HomeComponent,
    MobileMenuWrapComponent,
    SliderComponent,
    BannerAreaComponent,
    CardComponent,
    FooterComponent,
    ProductsComponent,
    SidebarComponent,
    ModalComponent,
    WishListComponent,
    CartPageComponent,
    CheckoutComponent,
    ProductDetailComponent,
    BreadcrumbComponent,
    LoginComponent,
    RegisterComponent,
    MyAccountComponent,
    LoginRegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgReduxModule, BrowserAnimationsModule, FormsModule, HttpClientModule, ToastrModule.forRoot({ timeOut: 700, positionClass: 'toast-bottom-right' })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    var enhancer = isDevMode() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancer);
  }
}
