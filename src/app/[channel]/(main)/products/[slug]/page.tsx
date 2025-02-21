import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import ImageViewer from "./components/images-viewer";
import Ratings from "@/components/rating";
import { executeGraphQL } from "@/lib/graphql";
import { ProductDetailsDocument } from "@/gql/graphql";
import { redirect } from "next/navigation";
import { VariantSelector } from "@/components/variant-selector";

const Pair = ({
  title,
  value,
  orientation,
}: {
  title: string;
  value: string;
  orientation: "vertical" | "horizontal";
}) => {
  return (
    <div
      className={`w-full md:max-w-[400px] flex ${
        orientation === "vertical" ? "flex-col" : "flex-row"
      } items-start gap-2 justify-between`}
    >
      <p className="text-sm text-gray-600">{title}</p>
      <span className="text-right text-sm">{value}</span>
    </div>
  );
};

const Detail = async ({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; channel: string }>;
  searchParams: Promise<{ variantId: string }>;
}) => {
  const { slug, channel } = await params;
  const { variantId } = await searchParams;

  const { product } = await executeGraphQL(ProductDetailsDocument, {
    variables: {
      slug,
      channel,
    },
    revalidate: 60,
  });

  if (!product) {
    redirect("/");
  }

  if (!variantId) {
    if (!product.variants?.[0].id) redirect("/");
    redirect(`?variantId=${product.variants?.[0].id}`);
  }

  const description = JSON.parse(product?.description || "").blocks[0]?.data
    ?.text;

  const variant = product?.variants?.find((p) => p.id === variantId);

  const discount =
    variant?.pricing?.price?.gross.amount ||
    (0 / (variant?.pricing?.priceUndiscounted?.gross.amount || 0)) * 100;

  return (
    <>
      <div className="md:px-32 px-6 mt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${channel}/shop`}>Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${channel}/shop/${product?.category?.slug}`}
              >
                {product?.category?.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product?.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mt-12 flex md:flex-row flex-col gap-8 md:px-32 px-6">
        <ImageViewer images={variant?.media} salePercent={discount} />
        <div className="md:w-1/2 flex flex-col gap-2">
          <span className="flex items-center gap-1">
            <Ratings rating={product?.rating || 0} />
            <p className="ml-2 text-sm">{product?.rating || 0} Ratings</p>
          </span>
          <h1 className="mt-2 text-xl md:text-4xl font-semibold">
            {product?.name}
          </h1>
          <p
            className="mt-2 text-gray-600 font-[300]"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <span className="my-2 text-primary font-semibold text-xl">
            ₹{variant?.pricing?.price?.gross.amount}{" "}
            <span className="text-gray-400 text-sm font-[400] line-through">
              ₹{variant?.pricing?.priceUndiscounted?.gross.amount}
            </span>{" "}
            <span className="text-[#12b985] text-sm">{discount}%</span>
          </span>
          <div className="border-b w-full mt-2" />
          <VariantSelector
            channel={channel}
            product={product}
            variants={product.variants || []}
            selectedVariant={variant}
          />
          <div className="border-b w-full my-2" />
          <Pair
            title={"SKU"}
            value={variant?.sku || ""}
            orientation="horizontal"
          />
          <Pair
            title={"Category"}
            value={product?.category?.name || ""}
            orientation="horizontal"
          />
          <Button className="md:w-[80%] my-2">Add to Cart</Button>
        </div>
      </div>
    </>
  );
};

export default Detail;
