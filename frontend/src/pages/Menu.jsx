import React, { useState } from "react";

export default function Menu() {
  const menuItems = [
    { name: "Chicken Curry", price: 800 },
    { name: "Fried Rice", price: 500 },
    { name: "Fruit Juice", price: 250 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = item => setCart([...cart, item]);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold mb-4">Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {menuItems.map((item, i) => (
          <div key={i} className="border p-4 rounded shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-green-700 font-bold">Rs. {item.price}</p>
            <button onClick={() => addToCart(item)} className="mt-2 w-full bg-green-700 text-white py-1 rounded hover:bg-green-800">Add to Cart</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="mt-6 p-4 border rounded bg-white shadow">
          <h3 className="text-2xl font-semibold mb-2">Cart</h3>
          {cart.map((item, i) => <p key={i}>{item.name} - Rs. {item.price}</p>)}
          <p className="font-bold mt-2">Total: Rs. {cart.reduce((a,b)=>a+b.price,0)}</p>
        </div>
      )}
    </div>
  );
}
