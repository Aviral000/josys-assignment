import React, { useState } from 'react';

interface Product {
    name: string,
    price: number,
    qty: number
}

const ProductForm: React.FC = () => {
  const [product, setProduct] = useState<Product>({ name: '', price: 0, qty: 0 });
  const [total, setTotal] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const calculateTotal = () => {
    const { price, qty } = product;
    setTotal(Number(price) * Number(qty));
  };

  return (
    <div>
      <h1>Product Form</h1>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        onChange={handleChange}
      />
      <input
        type="number"
        name="qty"
        placeholder="Quantity"
        onChange={handleChange}
      />
      <br />
      <button onClick={calculateTotal}>
        Get Total Amount
      </button>
      {total !== null && <p>Total Amount: {total}</p>}
    </div>
  );
};

export default ProductForm;
