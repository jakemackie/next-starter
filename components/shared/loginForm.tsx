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

    toast.info("Logging you in...");

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
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="space-y-4 mb-4"
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

        <div className="flex items-center w-full my-6">
          <div className="flex-grow border-t border-input"></div>
          <span className="px-4 text-xs text-muted-foreground uppercase">
            Or
          </span>
          <div className="flex-grow border-t border-input"></div>
        </div>

        {/* OAuth Providers */}
        <div className="w-full flex flex-col gap-2">
          <OAuthProvider provider="github">
            <Button
              type="submit"
              variant="outline"
              className="w-full h-auto flex items-center justify-center space-x-2 rounded-3xl"
            >
              <GitHub className="!size-6" />
              <span className="flex-1 text-center pr-9">
                Continue with GitHub
              </span>
            </Button>
          </OAuthProvider>

          <OAuthProvider provider="discord">
            <Button
              type="submit"
              variant="outline"
              className="w-full h-auto flex items-center justify-center space-x-2 rounded-3xl"
            >
              <Discord className="!size-6" />
              <span className="flex-1 text-center pr-9">
                Continue with Discord
              </span>
            </Button>
          </OAuthProvider>
        </div>
      </div>
    </Form>
  );
}
