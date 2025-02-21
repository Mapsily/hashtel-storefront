import { redirect } from "next/navigation";

export default async function ShopPage({
  params,
}: {
  params: Promise<{ channel: string }>;
}) {
  const { channel } = await params;
  redirect(`/${channel}/shop/all-products`);
}
