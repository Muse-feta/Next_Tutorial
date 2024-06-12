import Link from "next/link";
import React from "react";

const Products = () => {
  const productId: number = 100
  return (
    <div>
      <div>Products</div>
      <Link href="/products/1">Product 1</Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3" replace>Product 3</Link>
      <Link href={`/products/${productId}`}>Product 3</Link>
    </div>
  );
};

export default Products;
