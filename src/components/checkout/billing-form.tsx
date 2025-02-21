import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface BillingFormProps {
  useShippingForBilling: boolean;
  setUseShippingForBilling: (value: boolean) => void;
}

export default function BillingForm({
  useShippingForBilling,
  setUseShippingForBilling,
}: BillingFormProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Billing Information
      </h2>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="use-shipping"
          checked={useShippingForBilling}
          onCheckedChange={setUseShippingForBilling}
          className="border-gray-300 text-blue-500 focus:ring-blue-500"
        />
        <Label htmlFor="use-shipping" className="text-gray-600">
          Same as shipping address
        </Label>
      </div>
      {!useShippingForBilling && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="billing-first-name" className="text-gray-600">
                First name
              </Label>
              <Input id="billing-first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-last-name" className="text-gray-600">
                Last name
              </Label>
              <Input id="billing-last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="billing-address" className="text-gray-600">
              Address
            </Label>
            <Input id="billing-address" placeholder="123 Main St" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="billing-city" className="text-gray-600">
                City
              </Label>
              <Input id="billing-city" placeholder="New York" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="billing-zip" className="text-gray-600">
                ZIP Code
              </Label>
              <Input id="billing-zip" placeholder="10001" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
