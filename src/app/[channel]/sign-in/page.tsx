import Image from "next/image";
import SignInForm from "./components/sign-in-form";

export default async function SignInPage({
  params,
}: {
  params: Promise<{ channel: string }>;
}) {
  const { channel } = await params;
  return (
    <main className="flex md:flex-row flex-col md:h-screen">
      <aside className="bg-accent md:w-[50%] relative flex items-center justify-center p-8">
        <Image
          src="/hashtel-logo.png"
          alt="hastel-logo"
          width={50}
          height={56}
          className="md:w-[50px] w-[40px] absolute top-12 md:left-12 left-1/2"
        />
        <div className="flex flex-col items-center">
          <Image
            src="/sign-in.png"
            alt="sign-in"
            width={360}
            height={360}
            className="md:-mt-16 mt-16 md:w-full w-[180px]"
          />
          <h4 className="hidden md:block -mt-16 text-5xl text-center font-[500]">
            Join Hashtel Today
          </h4>
          <p className="hidden md:block mt-3 text-sm text-[hsl(var(--muted),0.9)] font-[600]">
            Power Up Your Experience.
          </p>
        </div>
      </aside>
      <div className="w-1/2 flex items-center justify-center">
        <SignInForm channel={channel} />
      </div>
    </main>
  );
}
