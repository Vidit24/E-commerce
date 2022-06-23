import { createSelector } from "reselect";

const baseCartSelector = (state) => state.cart;

export const cartSelector = createSelector(baseCartSelector, (cart) => {
  return cart;
});
