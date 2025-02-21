import Link from "next/link";

const STATUS = ["Requested", "Packing", "Dispatched", "Delivered"];

export default function Order({ products, createdAt, status, total }) {
  return (
    <section className="border rounded-md p-4">
      <table className="w-full text-left table-auto">
        <thead className="text-[#6C7275] text-sm font-normal border-b-[1px] border-[#E8ECEF]">
          <tr>
            <th className="py-2 w-1/3">Product</th>
            <th className="py-2 w-1/3">Variant</th>
            <th className="py-2 w-1/4">Quantity</th>
            <th className="py-2 w-1/4">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.productId} className="py-6 border-b-[1px] text-sm font-normal">
              <td className="py-6 font-semibold pr-4">
                <Link href={`/shop/${item.productId}`} key={item.productId}>
                  {item.productName}
                </Link>
              </td>
              <td className="py-6 capitalize">{item.variantId} Condition</td>
              <td className="py-6">{item.quantity}</td>
              <td className="py-6">
                {Number(item.price) * Number(item.quantity)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-gray-50 rounded-md flex gap-12 items-center p-4 mt-2">
        <div>
          <p className="font-medium">Date placed</p>
          <span className="text-muted text-sm">
            {createdAt.toDate().toLocaleDateString()}
          </span>
        </div>
        <div>
          <p className="font-medium">Payment Status</p>
          <span className="text-muted text-sm">PAID</span>
        </div>
        <div>
          <p className="font-medium">Status</p>
          <span className="text-muted text-sm">{STATUS[status]}</span>
        </div>
        <div>
          <p className="font-medium">Total</p>
          <span className="text-muted text-sm">₹{Math.ceil(total)}</span>
        </div>
      </div>
    </section>
  );
}
