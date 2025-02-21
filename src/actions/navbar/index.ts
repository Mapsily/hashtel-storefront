"use server";

import { redirect } from "next/navigation";

export const onProductSearch = async (channel: string, formdata: FormData) => {
  const value = formdata.get("search-bar");
  redirect(`/${channel}/shop/all-products?q=${value?.toString()}`);
};
