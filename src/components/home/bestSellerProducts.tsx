import ProductList, { PRODUCT_LIST_VARIANT } from "@/components/product-list";
import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export default async function BestSellerProducts({
  channel,
}: {
  channel: string;
}) {
  const data = await executeGraphQL(ProductListByCollectionDocument, {
    variables: {
      slug: "best-seller-products",
      channel: channel,
    },
  });
  const bestSellerPrducts =
    data.collection?.products?.edges.map((e) => e.node) || [];
  return (
    <ProductList
      title="Best Seller Products"
      variant={PRODUCT_LIST_VARIANT.VERTICAL}
      products={bestSellerPrducts}
      channel={channel}
    />
  );
}
