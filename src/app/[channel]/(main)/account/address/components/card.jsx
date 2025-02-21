"use client";

import { useState } from "react";
import { PencilLine } from "lucide-react";
import { Country, State } from "country-state-city";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  onUpdateBillingAddress,
  onUpdateShippingAddress,
} from "@/actions/auth";

export default function Card({ type, defaultAddress }) {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(defaultAddress);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      if (type === "billing") {
        await onUpdateBillingAddress(formData);
      } else {
        await onUpdateShippingAddress(formData);
      }
      setLoading(false);
      setIsEditing(false);
    } catch (error) {}
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="h-fit flex flex-col w-[342px] rounded-[8px] border p-[16px] gap-2 border-[#6C7275]">
      {isEditing ? (
        <form className="flex flex-col gap-3">
          <h2>{type === "billing" ? "Billing Address" : "Shipping Address"}</h2>
          <div className="flex justify-between">
            <h3 className="text-black text-base font-semibold">
              {defaultAddress ? "Edit Address" : "Add Address"}
            </h3>
          </div>
          <Input
            className="border rounded-md px-4 py-2"
            type="text"
            name="streetAddress1"
            value={formData?.streetAddress1}
            onChange={handleChange}
            placeholder="Address Line 1"
          />
          <Input
            className="border rounded-md px-4 py-2"
            type="text"
            name="streetAddress2"
            value={formData?.streetAddress2}
            onChange={handleChange}
            placeholder="Address Line 2"
          />
          <Input
            className="border rounded-md px-4 py-2"
            type="text"
            name="city"
            value={formData?.city}
            onChange={handleChange}
            placeholder="City"
          />
          <Select
            defaultValue={formData?.countryArea}
            onValueChange={(val) =>
              setFormData((p) => ({ ...p, countryArea: val }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              {State.getStatesOfCountry(formData?.country || "IN").map((c) => (
                <SelectItem key={c.name} value={c.name}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            defaultValue={formData?.country?.country || formData.country}
            onValueChange={(val) =>
              setFormData((p) => ({ ...p, country: val }))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              {Country.getAllCountries().map((c) => (
                <SelectItem key={c.name} value={c.isoCode}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            className="border rounded-md px-4 py-2"
            type="text"
            name="postalCode"
            value={formData?.postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
          />
          <div className="flex justify-between">
            <Button type="button" onClick={handleSave}>
              {loading ? "Loading..." : defaultAddress ? "Update" : "Save"}
            </Button>
            <Button type="button" variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </form>
      ) : (
        <>
          <div className="h-fit flex justify-between">
            <h3 className="text-black text-base font-semibold">
              {type === "billing" ? "Billing Address" : "Shipping Address"}
            </h3>
            <button
              className="flex text-base font-semibold gap-1 justify-center items-center text-[#6C7275]"
              onClick={() => setIsEditing(true)}
            >
              <PencilLine width={16} height={16} />
              <span>Edit</span>
            </button>
          </div>
          <div className="flex flex-col text-sm font-normal gap-1">
            {!formData && <span>No Address.</span>}
            <span>{formData?.streetAddress1}</span>
            <span>{formData?.streetAddress2}</span>
            <span>{formData?.city}</span>
            <span>{formData?.countryArea}</span>
            <span>{formData?.country?.country}</span>
            <span>{formData?.postalCode}</span>
          </div>
        </>
      )}
    </div>
  );
}
