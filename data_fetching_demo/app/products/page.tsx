import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};
const Users = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch("http://localhost:3001/products");
  const data = await response.json();
  console.log(data);
  return (
    <div>
      <ul className="space-y-4 p-4">
        {data.map((product: Product) => (
          <li
            key={product.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700"
          >
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-medium">${product.price}</p>
            {/* <p>{details.title}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
