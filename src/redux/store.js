import { applyMiddleware, createStore } from "redux";
import cartProductsReducer from "./cartProducts/cartProductsReducer";
import checkProductsInStock from "./middlewares/checkProductsInStock";

const store = createStore(
  cartProductsReducer,
  applyMiddleware(checkProductsInStock)
);
export default store;
