import ProductCard from "@/components/product-card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Filters from "./components/filters";
import { executeGraphQL } from "@/lib/graphql";
import {
  FilteredProductItemListDocument,
  OrderDirection,
  ProductCategoryListDocument,
} from "@/gql/graphql";
import { PRICES } from "@/constants/filter";

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string; channel: string }>;
  searchParams: Promise<{ priceBy: string; q: string }>;
}) {
  const { category, channel } = await params;
  const { priceBy, q } = await searchParams;

  const cData = await executeGraphQL(ProductCategoryListDocument, {
    revalidate: 60,
  });

  const categories = cData.categories?.edges.map((e) => e.node) || [];

  const convertedPriceBy = Array.isArray(priceBy)
    ? priceBy
    : priceBy
    ? [priceBy]
    : [];

  const greatestPrice = Math.max(
    ...convertedPriceBy.map((p) => PRICES[parseInt(p)].upper)
  );
  const lowestPrice = Math.min(
    ...convertedPriceBy.map((p) => PRICES[parseInt(p)].lower)
  );

  const categoryId = categories.find((c) => c.slug === category)?.id;

  const data = await executeGraphQL(FilteredProductItemListDocument, {
    variables: {
      channel: channel,
      sortBy: OrderDirection.Asc,
      slugs:
        category === "all-products" ? undefined : categoryId && [categoryId],
      gte: lowestPrice,
      lte: greatestPrice,
      search: q,
    },
  });

  const products = data.products?.edges.map((e) => e.node) || [];

  return (
    <div className="mt-12 mx-6 md:px-24">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Shop Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-12 flex">
        <Filters channel={channel} category={category} categories={categories}/>
        <div className="grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-4">
          {products.map((p) => (
            <ProductCard channel={channel} key={p.id} {...p} />
          ))}
          {!products.length && <p>No Products Found!</p>}
        </div>
      </div>
    </div>
  );
}
