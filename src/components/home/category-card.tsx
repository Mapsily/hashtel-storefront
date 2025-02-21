import { ProductCategoryItemFragment } from "@/gql/graphql";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({
  id,
  name,
  slug,
  backgroundImage,
  channel,
}: ProductCategoryItemFragment & { channel: string }) => {
  return (
    <Link
      href={`/${channel}/shop/${slug}`}
      className="max-h-[400px] cursor-pointer bg-accent flex items-end justify-between gap-8"
    >
      <span className="space-y-4 p-6 w-1/2">
        <h4 className="xl:text-2xl text-xl font-[500]">{name}</h4>
        <p className="w-fit text-primary flex items-center pb-1 gap-2 border-b p-0 border-primary !rounded-[0px]">
          Collection
          <ArrowRight size={16} />
        </p>
      </span>
      <Image
        src={backgroundImage?.url || ""}
        width={200}
        height={150}
        alt={backgroundImage?.alt || ""}
        className="w-1/2 max-h-[400px]"
      />
    </Link>
  );
};

export default CategoryCard;
