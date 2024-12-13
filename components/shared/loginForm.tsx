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
import { login } from "@/actions/auth/login";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import OAuthProvider from "@/components/shared/oauthProvider";
import GitHub from "../ui/icons/github";
import Discord from "../ui/icons/discord";

export function LoginForm() {
  const router = useRouter();
  const isPending = useRef(false);

  const form = useForm<z.infer<typeof authSchema>>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = async (values: z.infer<typeof authSchema>) => {
    isPending.current = true;
    const { email, password } = values;
    try {
      await login(email, password);
      toast.success("Login successful.");
      router.push("/dashboard");
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
      <div>
        {/* OAuth Providers */}
        <div className="w-full flex flex-col gap-2 lg:grid grid-cols-3">
          <OAuthProvider provider="github">
            <Button type="submit" variant="outline" className="w-full h-auto">
              <GitHub />
              <span className="lg:hidden">GitHub</span>
            </Button>
          </OAuthProvider>

          <OAuthProvider provider="discord">
            <Button type="submit" variant="outline" className="w-full h-auto">
              <Discord />
              <span className="lg:hidden">Discord</span>
            </Button>
          </OAuthProvider>
        </div>

        <div className="border w-full my-6" />

        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="space-y-8 mb-8"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
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
              Login
            </Button>
            <FormDescription>
              Not registered?{" "}
              <Link className="text-foreground hover:underline" href="/signup">
                Create an account
              </Link>
            </FormDescription>
          </div>
        </form>
      </div>
    </Form>
  );
}
