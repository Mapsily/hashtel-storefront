import Image from "next/image";
import Link from "next/link";

import Pair from "../../../../components/pair";

export const metadata = {
  title: "About Us - Hashtel",
  description:
    "Learn more about Hashtel, a leader in mobile accessories and innovation since 2019.",
};

export default function AboutUs() {
  return (
    <>
      <section className="mt-8 flex justify-center">
        <Image
          src="/about-us.png"
          width={1080}
          height={420}
          className="rounded-sm"
          alt="About Us Banner"
        />
      </section>
      <section className="md:px-32 px-6 mt-12">
        <h2 className="text-center md:text-start text-primary">What we do</h2>
        <div className="mt-6 flex md:flex-row flex-col gap-6">
          <p className="w-4/12 text-center md:text-start text-4xl font-semibold">
            Hashtel was conceptualized as an electronic and mobile accessories
            company.
          </p>
          <span className="w-full md:w-8/12 text-gray-600">
            In the beginning of the year 2019, Hashtel started manufacturing
            mobile accessories through contract manufacturers. Hashtel is a
            wholesale trader of the wide spectrum Mobile Earphone,Charging
            Adapters,Mobile Charger,Data Cable, etc. We are manufacturing these
            products using premium grade raw material that is procured from the
            authentic vendors of the market. We offer these products at
            reasonable rates and deliver these within the promised time-frame..
            We are a trademark registered company manufacturing products under
            the &quot;Make in India&quot; initiative. We always seek for new
            technology aiming to produce practical products with good quality
            and trendy designs.
          </span>
        </div>
      </section>
      <section className="flex md:flex-row flex-col items-center justify-between md:gap-8 gap-16 md:px-32 px-6 mt-16">
        <Pair heading="15k+" subheading="Happy Customer" />
        <Pair heading="5k+" subheading="Monthly Visitors" />
        <Pair heading="10+" subheading="States" />
        <Pair heading="50+" subheading="Partner" />
      </section>
      <section className="mt-16 flex justify-center py-8 bg-primary text-white">
        <div className="flex flex-col md:items-start gap-4 items-start w-[500px] px-16 md:px-0">
          <h2 className="font-bold">WORK WITH US</h2>
          <h3 className="md:text-6xl text-4xl font-semibold text-center md:text-start">
            Shape the Future with Hashtel
          </h3>
          <span className="text-sm font-[300] text-center md:text-start">
            Join Hashtel and be part of a team shaping the future of mobile
            accessories. Since 2019, we&apos;ve been committed to quality,
            innovation, and the &quot;Make in India&quot; initiative. We&apos;re
            looking for passionate individuals ready to grow with us in a
            collaborative, forward-thinking environment. If you&apos;re driven
            by creativity and technology, Hashtel is the place for you.
          </span>
          <Link href="mailto:hashteltechnology@gmail.com" className="underline">
            Apply
          </Link>
        </div>
      </section>
    </>
  );
}
