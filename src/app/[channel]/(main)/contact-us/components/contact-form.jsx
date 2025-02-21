"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addInquiry } from "@/actions/contact";

const DEFAULT_VALUES = {
  name: "",
  email: "",
  message: "",
};

const SCHEMA = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SCHEMA),
    defaultValues: DEFAULT_VALUES,
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    await addInquiry(data);
    reset();
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:w-1/2 flex items-center md:items-start flex-col gap-4"
    >
      <h2 className="font-semibold text-2xl">Tell Us Your Project</h2>
      <label className="w-full">
        Name
        <Input
          {...register("name")}
          type="text"
          placeholder="Rahul Saini"
          className="border p-2 rounded-md mt-2"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>
      <label className="w-full">
        Email
        <Input
          {...register("email")}
          type="email"
          placeholder="some@company.com"
          className="border p-2 rounded-md mt-2"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="w-full">
        Message
        <Textarea
          {...register("message")}
          className="mt-2"
          placeholder="A message from your side"
        />
        {errors.message && (
          <span className="text-red-500">{errors.message.message}</span>
        )}
      </label>
      <Button
        loading={loading}
        disabled={loading}
        type="submit"
        size="lg"
        className="w-full"
      >
        Submit
      </Button>
    </form>
  );
}
