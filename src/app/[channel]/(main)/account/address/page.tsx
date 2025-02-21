import { executeGraphQL } from "@/lib/graphql";
import Card from "./components/card";
import { CurrentUserDocument } from "@/gql/graphql";

export default async function Address() {
  const { me } = await executeGraphQL(CurrentUserDocument, { withAuth: true });
  console.log(me);
  
  return (
    <div className="w-full flex gap-2 flex-col">
      <h3 className="text-xl font-semibold">Address</h3>
      <div className="w-full flex md:flex-row flex-col gap-4">
        <Card type="billing" defaultAddress={me?.defaultBillingAddress} />
        <Card type="shipping" defaultAddress={me?.defaultShippingAddress} />
      </div>
    </div>
  );
}
