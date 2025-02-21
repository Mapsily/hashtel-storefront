"use client";

import { useState } from "react";
import BillingForm from "./billing-form";
import ShippingForm from "./shipping-form";

export default function CheckoutForm() {
  const [useShippingForBilling, setUseShippingForBilling] = useState(true);
  return (
    <section className="w-1/2 flex flex-col gap-8">
      <ShippingForm />
      <BillingForm
        useShippingForBilling={useShippingForBilling}
        setUseShippingForBilling={setUseShippingForBilling}
      />
    </section>
  );
}
