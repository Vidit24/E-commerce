import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import cart from "./cart";
import products from "./products";

const reducers = combineReducers({
  cart,
  products
  //user
  //coupon
});

export default createStore(reducers, applyMiddleware(thunk));
