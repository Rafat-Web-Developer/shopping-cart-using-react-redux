import React from "react";
import Product from "./Product";

const allProducts = [
  {
    id: 1,
    name: "Asus Vivobook X515MA",
    price: 35500,
    stock: 20,
    quantity: 0,
  },
  {
    id: 2,
    name: "Dell E1916HV 18.5 Inch",
    price: 9300,
    stock: 35,
    quantity: 0,
  },
  {
    id: 3,
    name: "Canon Eos 4000D 18MP",
    price: 36500,
    stock: 72,
    quantity: 0,
  },
];

const Products = () => {
  return (
    <div className='col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8'>
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
