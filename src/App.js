import { Provider } from "react-redux";
import ShoppingCart from "./components/ShoppingCart";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ShoppingCart />
      </Provider>
    </>
  );
}

export default App;
