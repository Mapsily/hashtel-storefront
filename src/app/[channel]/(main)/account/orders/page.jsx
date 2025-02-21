"use client";

import { useState } from "react";

import Order from "./components/order";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="w-full flex flex-col gap-10">
      <h1 className="text-xl font-semibold">Orders History</h1>
      {orders.map((o) => (
        <Order key={o.id} {...o} />
      ))}
      {!orders.length && (
        <p className="mt-4 text-center text-muted">No orders found.</p>
      )}
    </div>
  );
}
