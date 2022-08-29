import CartProduct from "./CartProduct";

const CartProducts = ({ cartProducts, productSum }) => {
  return (
    <div className='bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4'>
      {cartProducts.map((product) => {
        // console.log(product);
        return <CartProduct key={product.id} product={product} />;
      })}

      <div className='flex justify-center items-center text-center'>
        <div className='text-xl font-semibold'>
          <p>Total Item</p>
          <p className='text-5xl'>{productSum}</p>
        </div>
      </div>
    </div>
  );
};

export default CartProducts;
