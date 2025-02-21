import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import PDFViewer from "./components/pdf-viewer";
import OEMForm from "./components/oem-form";
import Features from "../../../../components/features";

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
              <BreadcrumbPage>OEM</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="md:w-[70%]">
          <h1 className="mt-8 font-semibold md:text-6xl text-4xl mb-4">
            We believe in sustainable Products. We&apos;re passionate about
            quality for life.
          </h1>
          <span className="text-gray-600 font-[300]">
            Our features timeless products, with natural fabrics, curved wires,
            plenty of mirrors and classic design, which can be used anytime. The
            pieces enchant for their sobriety, to last for generations, faithful
            to the shapes of each period, with a touch of the present.
          </span>
        </div>

        <section className="flex md:flex-row flex-col mt-16 gap-4">
          <div className="md:w-1/2 p-2 bg-accent flex flex-col justify-center items-start gap-8">
            <PDFViewer />
          </div>
          <OEMForm />
        </section>
      </div>

      <Features />
    </>
  );
};

export default ContactUs;
