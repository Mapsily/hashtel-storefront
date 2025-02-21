import React from "react";
import NavLinks from "./nav-links";
import { Button } from "@/components/ui/button";

export default function SiderNav({ channel }: { channel: string }) {
  return (
    <div className="md:w-[300px] h-fit p-4 py-8 space-y-3 bg-gray-100">
      <h3 className="pl-4 font-semibold text-2xl mb-4">Settings</h3>
      <NavLinks channel={channel} />
      <Button variant="link" className="text-black">
        Log Out
      </Button>
    </div>
  );
}
