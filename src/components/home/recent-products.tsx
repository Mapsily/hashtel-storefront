import ProductList from "@/components/product-list";
import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export default async function RecentProducts({ channel }: { channel: string }) {
  const data = await executeGraphQL(ProductListByCollectionDocument, {
    variables: {
      slug: "new-arrivals",
      channel: channel,
    },
  });
  const recentProducts = data.collection?.products?.edges.map((e) => e.node) || [];
  return (
    <ProductList channel={channel} title={data.collection?.name || ""} products={recentProducts} />
  );
}
