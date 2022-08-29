import cartProductsReducer from "../cartProducts/cartProductsReducer";

const checkProductsInStock = (state) => (next) => (action) => {
  const currentState = state.getState();
  const stock = action.payload.stock;
  const id = action.payload.id;

  const upcomingState = [action].reduce(cartProductsReducer, state.getState());

  if (currentState.length === 0) {
    return next(action);
  } else {
    const findProduct = upcomingState.find((product) => product.id === id);

    if (stock >= findProduct.quantity) {
      return next(action);
    }
  }
};
export default checkProductsInStock;
