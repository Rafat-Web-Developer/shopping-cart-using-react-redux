import { CART_PRODUCT_ADD, CART_PRODUCT_OUT } from "./actionTypes";

const initialState = [];

const cartProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_PRODUCT_OUT:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return { ...product };
      });

    case CART_PRODUCT_ADD:
      if (state.length === 0) {
        return [...state, action.payload];
      } else {
        const findProduct = state.find(
          (product) => product.id === action.payload.id
        );

        if (findProduct) {
          return state.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            }
            return { ...product };
          });
        } else {
          return [...state, action.payload];
        }
      }

    default:
      return state;
  }
};
export default cartProductsReducer;
