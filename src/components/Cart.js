import { useSelector } from "react-redux";
import CartProducts from "./CartProducts";

const Cart = () => {
  const cartProducts = useSelector((state) => state);

  let productSum = 0;
  let totalAmount = 0;
  let price = 0;
  let quantity = 0;

  for (let index = 0; index < cartProducts.length; index++) {
    productSum += cartProducts[index].quantity;
    price = cartProducts[index].price;
    quantity = cartProducts[index].quantity;
    totalAmount += price * quantity;
  }
  return (
    <div className='col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4'>
      <CartProducts cartProducts={cartProducts} productSum={productSum} />

      <div className='bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4'>
        <div className='flex justify-center items-center text-center'>
          <div className='text-xl font-semibold'>
            <p>Total Price</p>
            <p className='text-5xl'>{totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
