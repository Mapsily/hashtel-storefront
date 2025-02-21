import Image from "next/image";
import Link from "next/link";
import * as Checkout from "@/lib/checkout";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default async function CartButton({ channel }: { channel: string }) {
  const checkoutId = await Checkout.getIdFromCookies(channel);
  const checkout = await Checkout.find(checkoutId);

  return (
    <span className="flex items-center gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href={`/${channel}/cart`}>
              <Image
                alt=""
                src="/icons/shopping-bag.png"
                height={22}
                width={22}
              />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <p className="text-sm bg-primary h-6 w-6 flex items-center justify-center rounded-full text-white">
        {checkout?.lines.length || 0}
      </p>
    </span>
  );
}
