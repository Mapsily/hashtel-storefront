import Image from "next/image";
import Link from "next/link";
import NextLink from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const LINKS = [
  { title: "Home", path: "/" },
  {
    title: "OEM",
    path: "/oem",
  },
  { title: "About Us", path: "/about-us" },
  { title: "Contact Us", path: "/contact-us" },
];

const Footer = ({ channel }: { channel: string }) => {
  return (
    <footer
      className="bg-white px-6 pb-8 pt-16 sm:pt-24 lg:px-12 lg:pt-12"
      aria-labelledby="footer"
    >
      <div className="mx-auto">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <div className="flex md:flex-row flex-col items-center md:gap-8 gap-4">
            <Image
              src="/hashtel-logo.png"
              alt="hashtel-log"
              width={50}
              height={56}
            />
            <span className="hidden md:block">|</span>
            <p className="md:text-start text-center text-sm leading-6 text-gray-600">
              When quality meets innovation.
            </p>
          </div>
          <ul className="md:mt-0 mt-8 justify-center items-center gap-12 md:flex md:space-x-2 md:space-y-0">
            {LINKS.map((item, idx) => (
              <li key={idx} className="md:text-start text-center text-sm">
                <Link href={`/${channel}${item.path}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:flex-row flex-col-reverse items-center justify-between mt-8 border-t border-gray-400 pt-6">
          <div className="mt-4 md:mt-0 flex md:flex-row flex-col-reverse items-center md:gap-6 gap-4">
            <p className="text-sm leading-5 text-gray-500">
              Copyright &copy; 2025 Hashtel Technology Pvt. Ltd. All rights
              reserved
            </p>
            <NextLink
              href="/b2b/privacy-policy"
              className="font-[500] text-sm leading-5 text-black"
            >
              Privacy Policy
            </NextLink>
            <NextLink
              href="/b2b/return-policy"
              className="font-[500] text-sm leading-5 text-black"
            >
              Return Policy
            </NextLink>
            <NextLink
              href="/b2b/warranty-policy"
              className="font-[500] text-sm leading-5 text-black"
            >
              Warranty Policy
            </NextLink>
          </div>
          <span className="flex items-center justify-center gap-6">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    className="!px-0"
                    href="https://www.instagram.com/hashteltech/"
                  >
                    <Image
                      alt=""
                      src="/icons/instagram.png"
                      height={24}
                      width={24}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Instagram</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    className="!px-0"
                    href=" https://www.facebook.com/p/Hashtel-100095177684761/"
                  >
                    <Image
                      alt=""
                      src="/icons/facebook.png"
                      height={24}
                      width={24}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Facebook</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link className="!px-0" href=" https://wa.link/t2h14h">
                    <Image
                      alt=""
                      src="/icons/whatsapp.png"
                      height={24}
                      width={24}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Whatsapp</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
