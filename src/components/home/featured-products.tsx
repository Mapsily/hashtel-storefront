import ProductList from "@/components/product-list";
import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export default async function FeaturedProducts({
  channel,
}: {
  channel: string;
}) {
  const data = await executeGraphQL(ProductListByCollectionDocument, {
    variables: {
      slug: "featured-products",
      channel: channel,
    },
  });
  const featuredProducts =
    data.collection?.products?.edges.map((e) => e.node) || [];
  return <ProductList channel={channel} title="Featured Products" products={featuredProducts} />;
}
