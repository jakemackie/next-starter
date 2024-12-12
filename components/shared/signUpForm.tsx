"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "@/zod/authSchema";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signUp } from "@/actions/auth/signup";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import OAuthProvider from "@/components/shared/oauthProvider";
import GitHub from "../ui/icons/github";
import Discord from "../ui/icons/discord";
import BackButton from "./backButton";

export function SignUpForm() {
  const router = useRouter();
  const isPending = useRef(false);

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignUp = async (values: z.infer<typeof authSchema>) => {
    isPending.current = true;
    const { email, password } = values;
    try {
      await signUp(email, password);
      toast.info("We sent you an email to verify your account.");
      router.push("/");
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
        isPending.current = false;
      }
    }
  };

  return (
    <Form {...form}>
      <div className="sm:max-w-md w-full">
        <div className="mb-12">
          <BackButton />
        </div>

        <form
          onSubmit={form.handleSubmit(handleSignUp)}
          className="space-y-8 mb-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@email.com" {...field} />
                </FormControl>
                <FormDescription>
                  Please enter your email address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormDescription>Please enter your password.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-4">
            <Button
              type="submit"
              disabled={isPending.current}
              className="w-full"
            >
              Sign up
            </Button>
            <FormDescription>
              Already have an account?{" "}
              <Link className="text-white hover:underline" href="/login">
                Login
              </Link>
            </FormDescription>
          </div>
        </form>

        <div className="border w-full mb-6" />

        {/* OAuth Providers */}
        <div className="grid grid-cols-3 gap-2">
          <OAuthProvider provider="github">
            <Button type="submit" variant="secondary" className="w-full h-auto">
              <GitHub className="size-5" />
            </Button>
          </OAuthProvider>

          <OAuthProvider provider="discord">
            <Button type="submit" variant="secondary" className="w-full h-auto">
              <Discord className="size-5" />
            </Button>
          </OAuthProvider>
        </div>
      </div>
    </Form>
  );
}
