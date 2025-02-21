import React from "react";
import SiderNav from "./components/sidenav";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ channel: string }>;
}) {
  const {channel} = await params
  return (
    <div className="md:px-32 px-6">
      <h3 className="text-center text-4xl font-medium leading-10 py-12">
        My Account
      </h3>
      <div className="flex md:flex-row flex-col w-full gap-12">
        <SiderNav  channel={channel}/>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
