import { Separator } from "../ui/separator";

export default function OrderSummary() {
  return (
    <div className="w-1/2 h-fit space-y-6 bg-gray-50 p-6 rounded-lg border">
      <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>$99.99</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span>$9.99</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax</span>
          <span>$10.00</span>
        </div>
        <Separator className="my-4" />
        <div className="flex justify-between font-semibold text-lg text-gray-800">
          <span>Total</span>
          <span>$119.98</span>
        </div>
      </div>
    </div>
  );
}
