import CheckoutForm from "@/components/checkout/checkout-form";
import OrderSummary from "@/components/checkout/summary";

function Checkout() {
  return (
    <div className="flex py-16 px-32 justify-center gap-8">
      <CheckoutForm />
      <OrderSummary />
    </div>
  );
}

export default Checkout;
