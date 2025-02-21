"use server";

import { revalidatePath } from "next/cache";
import { executeGraphQL } from "@/lib/graphql";
import {
  CheckoutAddLineDocument,
  CheckoutDeleteLinesDocument,
} from "@/gql/graphql";
import * as Checkout from "@/lib/checkout";

type deleteLineFromCheckoutArgs = {
  lineId: string;
  checkoutId: string;
};

export const deleteLineFromCheckout = async ({
  lineId,
  checkoutId,
}: deleteLineFromCheckoutArgs) => {
  await executeGraphQL(CheckoutDeleteLinesDocument, {
    variables: {
      checkoutId,
      lineIds: [lineId],
    },
    cache: "no-cache",
  });

  revalidatePath("/cart");
};

export async function addItem(channel: string, selectedVariantID: string) {
  const checkout = await Checkout.findOrCreate({
    checkoutId: await Checkout.getIdFromCookies(channel),
    channel: channel,
  });

  if (!checkout?.id) {
    return;
  }

  Checkout.saveIdToCookie(channel, checkout?.id);

  if (!selectedVariantID) {
    return;
  }

  // TODO: error handling
  const data = await executeGraphQL(CheckoutAddLineDocument, {
    variables: {
      id: checkout?.id,
      productVariantId: decodeURIComponent(selectedVariantID),
    },
    cache: "no-cache",
  });

  console.log(data.checkoutLinesAdd,"test");

  revalidatePath("/cart");
}
