import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ShippingForm() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">
        Shipping Information
      </h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="first-name" className="text-gray-600">
            First name
          </Label>
          <Input
            id="first-name"
            placeholder="John"
            className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name" className="text-gray-600">
            Last name
          </Label>
          <Input
            id="last-name"
            placeholder="Doe"
            className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="address" className="text-gray-600">
          Address
        </Label>
        <Input
          id="address"
          placeholder="123 Main St"
          className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-gray-600">
            City
          </Label>
          <Input
            id="city"
            placeholder="New York"
            className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zip" className="text-gray-600">
            ZIP Code
          </Label>
          <Input
            id="zip"
            placeholder="10001"
            className="border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
