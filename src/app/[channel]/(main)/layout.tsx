import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ channel: string }>;
}>) {
  const { channel } = await params;

  return (
    <>
      <Navbar channel={channel} />
      <main>{children}</main>
      <Footer channel={channel} />
    </>
  );
}
