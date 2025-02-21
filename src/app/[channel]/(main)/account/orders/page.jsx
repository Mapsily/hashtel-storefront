"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

import Order from "./components/order";
import { fetchUserOrders } from "../../../../api/order";


export default function Orders() {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!user) return;
    fetchUserOrders(user.id).then(setOrders);
  }, [user]);

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
