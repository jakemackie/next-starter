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
import { authSchema } from "@/lib/schemas/authSchema";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { login } from "@/actions/account/login";
import { oauth } from "@/actions/account/oauth";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="space-y-8 mb-8 sm:max-w-md w-full"
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
            <Button type="submit" disabled={isPending.current}>
              Login
            </Button>
            <FormDescription>
              Not registered?{" "}
              <Link className="text-white hover:underline" href="/signup">
                Create an account
              </Link>
            </FormDescription>
          </div>
        </form>

        {/* OAuth Providers */}
        <form
          className="space-y-8 sm:max-w-md w-full"
          onSubmit={async (event) => {
            event.preventDefault();
            await oauth("github");
          }}
        >
          <Button type="submit" variant="outline">
            GitHub
          </Button>
        </form>
      </Form>
    </>
  );
}
