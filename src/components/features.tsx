import { CreditCard, Lock, Phone, Truck } from "lucide-react";

const Features = () => {
  return (
    <section className="mt-12 md:px-32 px-6 grid lg:grid-cols-4 grid-cols-2 gap-4">
      <div className="bg-accent md:min-w-[240px] min-h-[220px] w-full md:py-10 py-6 px-6">
        <Truck className="text-gray-600" size={42} />
        <h4 className="mt-4 text-lg md:text-xl font-[500]">Free Shipping</h4>
        <p className="mt-2 text-gray-600 text-sm">Order above ₹500</p>
      </div>
      <div className="bg-accent md:min-w-[240px] w-full min-h-[210px] md:py-10 py-6 px-6">
        <CreditCard className="text-gray-600" size={42} />
        <h4 className="mt-4 text-lg md:text-xl font-[500]">Money-back</h4>
        <p className="mt-2 text-gray-600 md:text-sm">30 days guarantee</p>
      </div>
      <div className="bg-accent md:min-w-[240px] w-full min-h-[210px] md:py-10 py-6 px-6">
        <Lock className="text-gray-600" size={42} />
        <h4 className="mt-4 text-lg md:text-xl font-[500]">Secure Payments</h4>
        <p className="mt-2 text-gray-600 md:text-sm">Secured by Instamojo</p>
      </div>
      <div className="bg-accent md:min-w-[240px] w-full min-h-[210px] md:py-10 py-6 px-6">
        <Phone className="text-gray-600" size={42} />
        <h4 className="mt-4 text-lg md:text-xl font-[500]">24/7 Support</h4>
        <p className="mt-2 text-muted md:text-sm">Phone and Email support</p>
      </div>
    </section>
  );
};

export default Features;
