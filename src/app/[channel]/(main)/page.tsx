import Features from "@/components/features";
import RecentProducts from "@/components/home/recent-products";
import FeaturedProducts from "@/components/home/featured-products";
import CategoryListings from "@/components/home/category-listings";
import Categories from "@/components/home/categories";
import Hero from "@/components/home//hero";
import BestSellerProducts from "@/components/home/bestSellerProducts";
import { getBanners } from "@/actions/home";

export default async function HomePage({
  params,
}: {
  params: Promise<{ channel: string }>;
}) {
  const { channel } = await params;
  const banners = await getBanners();
  return (
    <>
      <Hero banners={banners} />
      <RecentProducts channel={channel} />
      <Categories channel={channel} />
      <CategoryListings />
      <BestSellerProducts channel={channel} />
      <FeaturedProducts channel={channel} />
      <Features />
    </>
  );
}
