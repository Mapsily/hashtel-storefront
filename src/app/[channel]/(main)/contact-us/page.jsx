import { Home, Mail, Phone } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import Features from "../../../../components/features";
import ContactForm from "./components/contact-form";
import Map from "./components/map";
import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <div className="md:px-32 px-6 mt-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="md:w-[70%]">
          <h1 className="mt-8 font-semibold md:text-6xl text-4xl mb-4">
            We Deliver Premium Accessories at Affordable Prices
          </h1>
          <span className="text-gray-600 font-[300]">
            We are committed to providing high-quality accessories that enhance
            your everyday life without breaking the bank. Our range of premium
            products, crafted from the finest materials, ensures durability and
            performance. We believe that top-notch quality should be accessible,
            so we offer our accessories at affordable prices, making excellence
            both attainable and enjoyable.
          </span>
        </div>
        <section className="mt-8 flex justify-center">
          <Image
            src="/contact-us.png"
            width={1080}
            height={420}
            className="rounded-sm"
          />
        </section>
        <section className="mt-16">
          <h2 className="md:text-4xl text-2xl font-bold text-center">
            Contact Us
          </h2>
          <div className="mt-12 grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="flex flex-col items-center bg-accent py-10 px-6">
              <Home size={26} />
              <h4 className="mt-2 text-gray-600 font-[500]">ADDRESS</h4>
              <p className="mt-1 text-center text-[500]">
                Plot no 96 FF sector 1 Vasundhara Ghaziabad 201012
              </p>
            </div>
            <div className="flex flex-col items-center bg-accent py-10 px-6">
              <Phone size={26} />
              <h4 className="mt-2 text-gray-600 font-[500]">CONTACT US</h4>
              <p className="mt-1 text-[500]">+91 8750660055</p>
            </div>
            <div className="flex flex-col items-center bg-accent py-10 px-6">
              <Mail size={26} />
              <h4 className="mt-2 text-gray-600 font-[500]">EMAIL</h4>
              <p className="mt-1 text-[500]">hashteltechnology@gmail.com</p>
            </div>
          </div>
        </section>
        <section className="mt-16 flex md:flex-row flex-col-reverse gap-6 justify-between items-center">
          <span className="md:w-1/2">
            <Map address="1600 Amphitheatre Parkway, Mountain View, CA" />
          </span>
          <ContactForm />
        </section>
      </div>
      <Features />
    </>
  );
};

export default ContactUs;
