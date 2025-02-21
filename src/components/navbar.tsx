import React from "react";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import CartButton from "./cart-button";
import SearchBar from "./search-bar";
import Link from "next/link";
import { LINKS } from "@/constants/navbar";
import { executeGraphQL } from "@/lib/graphql";
import {
  CurrentUserDocument,
  ProductCategoryListDocument,
} from "@/gql/graphql";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default async function Navbar({ channel }: { channel: string }) {
  const data = await executeGraphQL(ProductCategoryListDocument, {
    revalidate: 60,
  });
  const { me } = await executeGraphQL(CurrentUserDocument, { withAuth: true });
  const categories = data.categories?.edges.map((e) => e.node) || [];

  return (
    <nav className="bg-white w-full border-b border-gray-100 md:px-32 px-6 py-4">
      <div className="w-full items-center justify-between flex">
        <Link href="/">
          <Image src="/hashtel-logo.png" width={50} height={56} alt="logo" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex flex-1 justify-center items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {LINKS.map((item) =>
                item.isMenu ? (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col gap-2 p-2">
                      {categories.map((category, subIdx) => (
                        <NavigationMenuLink
                          key={subIdx}
                          className={navigationMenuTriggerStyle()}
                          href={`/${channel}/shop/${category.slug}`}
                        >
                          {category.name}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href={item.path}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>{" "}
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex justify-self-center items-center gap-4">
          <SearchBar channel={channel} />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={me ? `/${channel}/account` : `/${channel}/sign-in`}>
                  <Image
                    src="/icons/account.png"
                    alt="user-accout-icon"
                    height={20}
                    width={20}
                    className="hidden md:block"
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Account</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <CartButton channel={channel} />
        </div>
      </div>
    </nav>
  );
}
