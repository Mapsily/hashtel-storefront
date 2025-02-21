"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Button } from "../../../../components/ui/button";
import { updateOrder } from "../../../../api/order";
import { useAuthContext } from "../../../../context/AuthContext";
import { useGlobalContext } from "../../../../context/GlobalContext";

function Complete() {
  const [payment, setPayment] = useState();
  const { user, loading } = useAuthContext();
  const { emptyCart } = useGlobalContext();
  const sp = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (!sp.get("payment_id") || !sp.get("order_id")) {
      router.replace("/");
      return;
    }
    completeOrder();
  }, []);

  const completeOrder = async () => {
    const paymentId = sp.get("payment_id");
    const res = await fetch(`/api/payments?paymentId=${paymentId}`);
    const payment = await res.json();
    setPayment(payment);
    await updateOrder(sp.get("order_id"), {
      paymentStatus: payment.status ? 1 : 0,
      paymentMethod: payment.instrument_type,
      paymentId,
    });
    emptyCart();
  };

  if (!loading && !user) {
    return router.replace("/");
  }

  return (
    <div className="rounded-lg flex flex-col items-center justify-center px-16 py-8 text-center shadow">
      <h5 className="text-gray-500 text-lg font-[600]">Thank you!🎉</h5>
      <h4 className="text-black text-4xl font-semibold flex-col">
        Your order has been <div>received</div>
      </h4>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex w-full mt-4 justify-center">
            <div className="flex flex-col items-start w-1/2 text-gray-500 text-sm">
              <div>Order Id:</div>
              <div>Payment method:</div>
              <div>Total:</div>
            </div>

            <div className="flex flex-col items-start w-1/2 text-black font-semibold text-sm">
              <div>{sp.get("order_id")}</div>
              <div>{payment?.instrument_type}</div>
              <div>₹{payment?.amount}</div>
            </div>
          </div>
          <Link href="/account/orders" className="mt-7">
            <Button>Purchase History</Button>
          </Link>
        </>
      )}
    </div>
  );
}

const Page = () => {
  return (
    <Suspense>
      <Complete />
    </Suspense>
  );
};

export default Page;
