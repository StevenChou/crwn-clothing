import { createSelector } from 'reselect';

// 所以傳入的參數為 state
const selectCart = state => state.cart;

// input selector & output selector
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// input selector & output selector
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
