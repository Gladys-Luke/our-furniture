import { createContext, useReducer } from "react";

const initialState = {
  cart: {},
};

const Context = createContext({});

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.cart[action.payload.id];
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: item
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : {
                ...action.payload,
                qty: 1,
              },
        },
      };
    case "SUBTRACT_FROM_CART":
      const cartItem = state.cart[action.payload.id];
      if (cartItem.qty === 1) {
        const newCart = { ...state.cart };
        delete newCart[action.payload.id];
        return {
          ...state,
          cart: newCart,
        };
      } else {
        return {
          ...state,
          cart: {
            ...state.cart,
            [action.payload.id]: {
              ...cartItem,
              qty: cartItem.qty - 1,
            },
          },
        };
      }

    case "REMOVE_FROM_CART":
      const newCart = { ...state.cart };
      delete newCart[action.payload.id];
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
}
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
export { Context, Provider };
