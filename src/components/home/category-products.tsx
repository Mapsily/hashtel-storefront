import ProductList from "@/components/product-list";

export default async function RecentProducts({ category }) {
  const categoryProducts = []
  return <ProductList title={category.name} products={categoryProducts} />;
}
