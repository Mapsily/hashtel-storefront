"use client";

import { onUpdate } from "@/actions/auth";
import FormGenerator from "@/components/form-generator";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface UserInputs {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export default function UserDetailsForm(props: UserInputs) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<UserInputs>({ defaultValues: props });
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<UserInputs> = async (values) => {
    setLoading(true);
    await onUpdate(values);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="w-full grid grid-cols-2 gap-4">
        <legend className="col-span-2 mb-6 text-2xl font-semibold leading-8">
          Account Details
        </legend>
        <FormGenerator
          register={register}
          errors={errors}
          inputType="input"
          name="firstName"
          placeholder="Enter first name"
          type="text"
          label="First Name"
        />
        <FormGenerator
          register={register}
          errors={errors}
          inputType="input"
          name="lastName"
          placeholder="Enter last name"
          type="text"
          label="Last Name"
        />
        <FormGenerator
          register={register}
          errors={errors}
          inputType="input"
          name="email"
          placeholder="Enter email"
          type="email"
          label="Email"
          disabled
        />
        <FormGenerator
          register={register}
          errors={errors}
          inputType="input"
          name="phoneNumber"
          placeholder="Enter phone number"
          type="number"
          label="Phone Number"
        />
      </fieldset>
      <Button disabled={!isDirty} className="mt-4 w-fit" type="submit">
        {loading ? "Loading..." : "Save"}
      </Button>
    </form>
  );
}
