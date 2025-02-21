import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductListItemFragment } from "@/gql/graphql";
import ProductCard from "./product-card";

export enum PRODUCT_LIST_VARIANT {
  HORIZONTAL,
  VERTICAL,
}

const ProductList = ({
  title,
  variant = PRODUCT_LIST_VARIANT.HORIZONTAL,
  products = [],
  channel,
}: {
  title: string;
  products: ProductListItemFragment[];
  variant?: PRODUCT_LIST_VARIANT;
  channel: string;
}) => {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between md:px-32 px-6 py-6 md:py-8">
        <h2 className="md:text-4xl text-2xl font-semibold">{title}</h2>
        <Link href={`/${channel}/shop`} className="flex items-center text-primary gap-2">
          All Products <ArrowRight size={16} />
        </Link>
      </div>
      <div
        className={`md:px-32 px-6 ${
          variant === PRODUCT_LIST_VARIANT.HORIZONTAL ? "flex" : "grid"
        } sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-2 gap-8 overflow-x-scroll md:overflow-x-hidden w-full relative`}
      >
        {products.map((p) => (
          <ProductCard key={p.id} {...p} channel={channel} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
