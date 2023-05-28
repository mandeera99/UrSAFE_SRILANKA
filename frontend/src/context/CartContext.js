import React, { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const CART_INITIAL_STATE = {
  cartItems: [],
  itemsCount: 0,
  cartSubtotal: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cartItems: action.payload };
    case 'SET_CART_SUBTOTAL':
      return { ...state, cartSubtotal: action.payload };
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (!cart) {
      cart = { cartItems: [], cartSubtotal: 0 };
    } else {
      cart.itemsCount = cart.cartItems.length; // Add itemsCount property
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    dispatch({ type: 'ADD_TO_CART', payload: cart.cartItems });
    dispatch({ type: 'SET_CART_SUBTOTAL', payload: cart.cartSubtotal});
  }, []);

  console.log('CartContext state:', state);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

