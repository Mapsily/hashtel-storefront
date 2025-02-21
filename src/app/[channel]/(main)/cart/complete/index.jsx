"use client";

import React, { Suspense } from "react";

import Link from "next/link";

import { Button } from "../../../../components/ui/button";

function Complete() {
  return (
    <div className="rounded-lg flex flex-col items-center justify-center px-16 py-8 text-center shadow">
      <h5 className="text-gray-500 text-lg font-[600]">Thank you!🎉</h5>
      <h4 className="text-black text-4xl font-semibold flex-col">
        Your order has been <div>received</div>
      </h4>

      {false ? (
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
              <div></div>
              <div></div>
              <div>₹</div>
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
