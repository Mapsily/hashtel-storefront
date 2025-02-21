"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const LINKS = [
  { title: "Account", path: "/account" },
  { title: "Address", path: "/account/address" },
  { title: "Orders", path: "/account/orders" },
];

export default function NavLinks({ channel }: { channel: string }) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-3">
      {LINKS.map((link) => (
        <li key={link.title} className="w-full relative hover:text-black">
          <Button
            asChild
            variant="link"
            className={cn(
              "text-black",
              pathname === `/${channel}${link.path}` && "text-primary underline"
            )}
          >
            <Link href={`/${channel}${link.path}`}>{link.title}</Link>
          </Button>
        </li>
      ))}
    </ul>
  );
}
