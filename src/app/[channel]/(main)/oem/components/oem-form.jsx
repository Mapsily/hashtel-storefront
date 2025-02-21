"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addOEM } from "@/actions/contact";

const DEFAULT_VALUES = {
  name: "",
  email: "",
  contact: "",
  address: "",
  reason: "",
};

const SCHEMA = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  contact: z
    .string()
    .min(10, "Contact number should be at least 10 digits")
    .max(10, "Contact number should not exceed 10 digits"),
  address: z.string().min(5, "Address is not completed (Min 5 characters)"),
  reason: z.string().min(10, "Reason must be at least 10 characters long"),
});

export default function OEMForm() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(SCHEMA),
    defaultValues: DEFAULT_VALUES,
  });

  const onSubmit = async (data) => {
    setLoading(true);
    await addOEM(data);
    form.reset();
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-1/2 flex flex-col gap-6"
      >
        <h2 className="font-semibold text-2xl">Need An OEM</h2>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Rahul Saini"
                  className="border p-2 rounded-md w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="some@company.com"
                  className="border p-2 rounded-md w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="contact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="1234567891"
                  className="border p-2 rounded-md w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="G-1, noida, 202020"
                  className="border p-2 rounded-md w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="reason"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Reason</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Reason for applying for an OEM"
                  className="border p-2 rounded-md w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading} loading={loading} type="submit" size="lg">
          Submit
        </Button>
      </form>
    </Form>
  );
}
