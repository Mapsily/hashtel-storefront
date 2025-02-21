import { ConfirmUserDocument } from "@/gql/graphql";
import { getServerAuthClient } from "@/lib/client";
import { executeGraphQL } from "@/lib/graphql";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AccountConfirmation({
  searchParams,
}: {
  searchParams: Promise<{ email: string; token: string }>;
}) {
  const { email, token } = await searchParams;

  const c = await cookies();
  const password = c.get("password")?.value || "";
  c.delete("password");

  const data = await executeGraphQL(ConfirmUserDocument, {
    variables: {
      email,
      token,
    },
    revalidate: 60,
  });

  const res = await getServerAuthClient().signIn(
    {
      email,
      password,
    },
    { cache: "no-store" }
  );

  if (data.confirmAccount?.user?.isConfirmed) {
    redirect("/");
  }
}
