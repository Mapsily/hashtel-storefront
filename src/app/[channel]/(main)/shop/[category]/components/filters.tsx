import MobileFilters from "./mobile-filters";
import FilterContent from "./filter-content";
import { ProductCategoryItemFragment } from "@/gql/graphql";

export default async function Filters({
  category,
  channel,
  categories,
}: {
  category: string;
  channel: string;
  categories: ProductCategoryItemFragment[];
}) {
  return (
    <div className="md:w-[30%]">
      <MobileFilters
        categories={categories}
        category={category}
        channel={channel}
      />
      <div className="hidden md:block w-full">
        <FilterContent
          categories={categories}
          category={category}
          channel={channel}
        />
      </div>
    </div>
  );
}
