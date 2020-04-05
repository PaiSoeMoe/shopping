import { HIDE_CART, SHOW_HIDE_CART, SHOW_HIDE_SETTING, HIDE_SETTING, SHOW_MOBILE_MENU, TAB_CHANGE, SHOW_QUICK_VIEW, HIDE_QUICK_VIEW, ADD_TO_CART, REMOVE_FROM_CART, SET_PRODUCTS, CLEAR_SHOPPING_CART, SHOW_HIDE_FILTER, SHOW_REGISTER, HIDE_REGISTER, CHANGE_CURRENCY } from "src/app/actions";
import { getCurrencySymbol } from '@angular/common';


export interface Product {
  _id: String,
  name: String,
  isActive: Boolean,
  title: String,
  link: String,
  newPrice: Number,
  oldPrice: Number,
  img: Array<String>,
  category: String,
  categoryLink: String,
  color: Array<String>,
  onsale: Boolean,
  instock: Boolean,
  size: Array<String>
}
interface Color {
  name: String,
  number: Number
}

interface Size {
  name: String,
  number: Number
}

interface cartItem {
  id: Number,
  name: String,
  isActive: Boolean,
  title: String,
  link: String,
  newPrice: Number,
  oldPrice: Number,
  img: Array<String>,
  category: String,
  categoryLink: String,
  color: Array<String>,
  onsale: Boolean,
  instock: Boolean,
  size: Array<String>,
  quantity: Number
}



export interface IAppState {
  cartShow: Boolean,
  settAnimateState: String,
  showMobileMenu: Boolean,
  products: Array<Product>,
  quickView: Boolean,
  cart: Array<cartItem>,
  modalItem: Array<Product>,
  cartTotal: Number
  filter: Boolean,
  register: Boolean,
  currency: String
}




export const INITIAL_STATE: IAppState = {
  products: [], filter: false,
  register: false,
  cartShow: false, settAnimateState: "out", showMobileMenu: false, quickView: false, cart: [], modalItem: [], cartTotal: 0, currency: "USD"
};
export function rootReducer(state, action) {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      let a = Object.assign({}, state, { cartShow: !state.cartShow })
      return a;
    }
    case HIDE_CART: {
      return Object.assign({}, state, { cartShow: false });
    }
    case SHOW_HIDE_SETTING: {
      return Object.assign({}, state, { settAnimateState: state.settAnimateState === 'out' ? 'in' : 'out' })
    }
    case HIDE_SETTING: {
      return Object.assign({}, state, { settAnimateState: 'out' });
    }
    case SHOW_MOBILE_MENU: {
      return Object.assign({}, state, { showMobileMenu: !state.showMobileMenu })
    }
    case TAB_CHANGE: {
      let tabs = state.tabs.map(t => {
        if (action.data === t) {
          t.isActive = true;
        } else {
          t.isActive = false;
        }
      })
      return Object.assign({}, state, tabs)
    }
    case SHOW_QUICK_VIEW: {
      return Object.assign({}, state, { quickView: true, modalItem: action.payload })
    }
    case HIDE_QUICK_VIEW: {
      return Object.assign({}, state, { quickView: false })
    }
    case ADD_TO_CART: {

      let index = state.cart.findIndex(x => x.id === action.payload._id);

      if (index === -1) {
        return Object.assign({}, state, { cart: state.cart.concat(action.payload), cartTotal: state.cartTotal + (action.payload.newPrice * action.payload.quantity) });
      } else {

        let obj = state.cart
        obj[index].quantity = obj[index].quantity + action.payload.quantity
        return Object.assign({}, state, { cart: obj, cartTotal: state.cartTotal + (action.payload.quantity * action.payload.newPrice) });
      }

    }
    case REMOVE_FROM_CART: {
      let index = state.cart.findIndex(x => x.id === action.payload)
      let obj = [...state.cart]
      let cartTotal = state.cartTotal - state.cart[index].newPrice * state.cart[index].quantity
      obj.splice(index, 1);
      return Object.assign({}, state, { cart: obj, cartTotal: cartTotal });

    }
    case CLEAR_SHOPPING_CART: {
      return Object.assign({}, state, { cart: [], cartTotal: 0 });
    }
    case SET_PRODUCTS: {
      return Object.assign({}, state, { products: action.payload });
    }
    case SHOW_HIDE_FILTER: {
      return Object.assign({}, state, { filter: !state.filter });
    }
    case SHOW_REGISTER: {
      return Object.assign({}, state, { register: true });
    }
    case HIDE_REGISTER: {
      return Object.assign({}, state, { register: false })
    }
    case CHANGE_CURRENCY: {
      return Object.assign({}, state, { currency: action.payload });
    }
    default: {
      return state;
    }
  }

}
