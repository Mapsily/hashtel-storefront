import { executeGraphQL } from "@/lib/graphql";
import CategoryCard from "./category-card";
import { ProductCategoryListDocument } from "@/gql/graphql";

const CategoryList = async ({ channel }: { channel: string }) => {
  const data = await executeGraphQL(ProductCategoryListDocument, {
    revalidate: 60,
  });

  const categories = data.categories?.edges.map((e) => e.node) || [];

  return (
    <section className="md:px-32 px-6 mt-12">
      <h2 className="md:text-4xl text-2xl font-semibold md:text-start text-center">
        Shop Collection
      </h2>
      <div className="mt-8 md:grid flex flex-col grid-cols-2 gap-8">
        {categories.map((c) => (
          <CategoryCard key={c.id} {...c} channel={channel} />
        ))}
      </div>
    </section>
  );
};

export default CategoryList;
