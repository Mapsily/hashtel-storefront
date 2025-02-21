import { CurrentUserDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import UserDetailsForm from "./components/user-details-form";

export default async function Account() {
  const { me } = await executeGraphQL(CurrentUserDocument, { withAuth: true });
  console.log(me);

  return (
    <UserDetailsForm
      email={me?.email || ""}
      firstName={me?.firstName || ""}
      lastName={me?.lastName || ""}
      phoneNumber={
        me?.metadata.find((m) => m.key === "phoneNumber")?.value || ""
      }
    />
  );
}
