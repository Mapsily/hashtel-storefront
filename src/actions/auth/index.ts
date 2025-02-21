"use server";

import {
  ConfirmUserDocument,
  RegisterUserDocument,
  UpdateUserDocument,
} from "@/gql/graphql";
import { getServerAuthClient } from "@/lib/client";
import { executeGraphQL } from "@/lib/graphql";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const onSignIn = async (formData: FormData) => {
  const res = await getServerAuthClient().signIn(
    {
      email: formData.get("email")?.toString() || "",
      password: formData.get("password")?.toString() || "",
    },
    { cache: "no-store" }
  );

  if (res.data.tokenCreate) {
    redirect(`/`);
  }
};

export const onRegister = async (channel: string, formData: FormData) => {
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";
  const firstName = formData.get("firstName")?.toString() || "";
  const lastName = formData.get("lastName")?.toString() || "";

  const data = await executeGraphQL(RegisterUserDocument, {
    variables: {
      channel,
      email,
      password,
      firstName,
      lastName,
      redirectUrl: "http://localhost:3000/" + channel + "/account-confirm/",
    },
  });

  const c = await cookies();
  c.set("password", password);

  if (data.accountRegister?.user) {
    redirect(`/${channel}/verify-email`);
  }
};

export const onUpdate = async (formData: {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}) => {
  const { firstName, lastName, phoneNumber } = formData;

  const data = await executeGraphQL(UpdateUserDocument, {
    variables: {
      updates: {
        firstName,
        lastName,
        metadata: [{ key: "phoneNumber", value: phoneNumber }],
      },
    },
  });
  return data.accountUpdate?.errors;
};

export const onUpdateBillingAddress = async (address: any) => {
  const data = await executeGraphQL(UpdateUserDocument, {
    variables: {
      updates: {
        defaultBillingAddress: address,
      },
    },
    withAuth: true,
  });
  console.log(data.accountUpdate?.errors);
  
  return data.accountUpdate?.errors;
};

export const onUpdateShippingAddress = async (address: any) => {
  const data = await executeGraphQL(UpdateUserDocument, {
    variables: {
      updates: {
        defaultShippingAddress: address,
      },
    },
    withAuth: true,
  });
  return data.accountUpdate?.errors;
};
