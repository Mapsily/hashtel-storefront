import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";

export default async function EmailVerification({
  params,
}: {
  params: Promise<{ channel: string }>;
}) {
  const { channel } = await params;
  return (
    <div className="min-h-screen bg-gradient-to-br bg-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            Verify Your Email
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-gray-600 mb-4">
            We've sent a verification link to your email address. Please check
            your inbox and click on the link to verify your account.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <p className="text-sm text-gray-500 text-center">
            Didn't receive the email? Check your spam folder or try resending.
          </p>
        </CardFooter>
      </Card>

      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; 2024 Hashtel. All rights reserved.</p>
      </footer>
    </div>
  );
}
