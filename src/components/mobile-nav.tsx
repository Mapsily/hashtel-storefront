"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import CartButton from "./cart-button";

export default function MobileNav({ LINKS, verified, categories }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div>
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl focus:outline-none"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden w-[80%] fixed inset-0 bg-white z-50 p-4">
          <div className="flex flex-col space-y-4">
            {/* Mobile links */}
            <ul className="space-y-4">
              {LINKS.map((item, idx) =>
                item.isMenu ? (
                  <li key={idx} className="flex flex-col">
                    <span
                      className={`cursor-pointer ${
                        showCategories ? "font-medium" : "text-muted border-b"
                      }`}
                      onClick={() => setShowCategories(!showCategories)}
                    >
                      {item.title}
                    </span>
                    {showCategories && (
                      <ul className="space-y-2 my-4">
                        {categories.map((subItem, subIdx) => (
                          <li key={subIdx} className="border-b">
                            <Link
                              href={`/shop?category=${subItem.id}`}
                              onClick={() => setMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={idx} className="border-b">
                    <Link href={item.path} onClick={() => setMenuOpen(false)}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Cart and Wishlist */}
            <CartButton />

            {/* Sign In Button */}
            <Link href={verified ? "/account" : "/sign-in"}>
              <Button className="w-full bg-primary text-white">Sign In</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
