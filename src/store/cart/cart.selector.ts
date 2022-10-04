import { createSelector } from 'reselect';
import { CartState } from './cart.reducer';

const selectCartReducer = (state: any): CartState => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart: any) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart: any) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems: any): number =>
    cartItems.reduce(
      (total: any, cartItem: any) => total + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems: any): number =>
    cartItems.reduce(
      (total: any, cartItem: any) => total + cartItem.quantity * cartItem.price,
      0
    )
);
