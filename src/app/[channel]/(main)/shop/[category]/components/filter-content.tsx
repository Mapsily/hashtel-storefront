"use client";

import { Settings2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

import Checkbox from "./checkbox";
import { ProductCategoryItemFragment } from "@/gql/graphql";
import { PRICES } from "@/constants/filter";

export default function FilterContent({
  categories,
  category,
  channel,
}: {
  categories: ProductCategoryItemFragment[];
  category: string;
  channel: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const priceBy = searchParams.getAll("priceBy");

  const handleClick = (filter: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (filter === "0") {
      newParams.delete("priceBy");
    } else if (priceBy.includes(filter)) {
      newParams.delete("priceBy");
      priceBy
        .filter((f) => f !== filter)
        .map((f) => newParams.append("priceBy", f));
    } else {
      newParams.append("priceBy", filter);
    }

    const sp = new URLSearchParams(newParams).toString();
    router.replace(`/${channel}/shop/${category}/${sp ? `?${sp}` : ""}`, {
      scroll: false,
    });
  };

  return (
    <>
      <span className="flex gap-2 items-center font-semibold">
        <Settings2 size={18} /> Filter
      </span>
      <div className="mt-8 flex flex-col items-start">
        <h3 className="font-[600] text-xl">Categories</h3>
        {[{ slug: "all-products", name: "All" }, ...categories].map((c) => (
          <Link
            key={c.slug}
            replace
            href={`/${channel}/shop/${c.slug}`}
            scroll={false}
            className={`px-0 py-2 ${
              c.slug === category ? "text-primary underline" : "text-gray-600"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-start gap-4">
        <h3 className="font-[600] text-xl">Price</h3>
        {PRICES.map(({ label }, index) => (
          <Checkbox
            key={label}
            label={label}
            checked={
              index === 0 ? !priceBy.length : priceBy.includes(`${index}`)
            }
            onChange={() => handleClick(`${index}`)}
          />
        ))}
      </div>
    </>
  );
}
