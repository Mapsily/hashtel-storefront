import { onRegister } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function SignUpForm({ channel }: { channel: string }) {
  return (
    <form
      action={onRegister.bind(null, channel)}
      className="space-y-8 bg-white border rounded-2xl p-8"
    >
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tighter">
          Create an account
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your information to get started
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">Full Name</Label>
            <Input
              name="firstName"
              id="firstName"
              placeholder="John"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input name="lastName" id="lastName" placeholder="Doe" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="john@example.com"
            required
            type="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input name="password" id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link
          href={`/${channel}/sign-in`}
          className="underline"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
}
