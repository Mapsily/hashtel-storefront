"use client";

import { X } from "lucide-react";
import { useState } from "react";

import FilterContent from "./filter-content";
import { Button } from "../../../../../../components/ui/button";
import { ProductCategoryItemFragment } from "@/gql/graphql";

export default function MobileFilters({
  categories,
  category,
  channel,
}: {
  categories: ProductCategoryItemFragment[];
  category: string;
  channel: string;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transform ${
        isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
      onClick={() => setIsDrawerOpen(!isDrawerOpen)}
    >
      <div
        className="bg-white h-full w-3/4 p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="outline"
          className="mb-4"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <X size={18} />
          Close
        </Button>
        <FilterContent
          categories={categories}
          category={category}
          channel={channel}
        />
      </div>
    </div>
  );
}
