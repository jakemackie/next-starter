"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountSchema } from "@/zod/accountSchema";
import type { User } from "@supabase/supabase-js";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getUser } from "@/actions/account/getUser";
import { changeDisplayName } from "@/actions/account/changeDisplayName";
import { changeEmail } from "@/actions/account/changeEmail";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { toast } from "sonner";

export default function AccountPage() {
  const [user, setUser] = useState<User | null>(null);

  const isPending = useRef(false);

  const form = useForm<z.infer<typeof accountSchema>>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const handleEditCredentials = async (
    values: z.infer<typeof accountSchema>
  ) => {
    isPending.current = true;
    const { name, email } = values;

    if (name) {
      try {
        await changeDisplayName(name);
        isPending.current = false;
        toast.success("Name updated successfully.");
      } catch (error) {
        isPending.current = false;
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Failed to update name.");
        }
      }
    }

    if (email) {
      try {
        await changeEmail(email);
        isPending.current = false;
        toast.success("Email updated successfully.");
      } catch (error) {
        isPending.current = false;
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Failed to update email.");
        }
      }
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUser();
      if (fetchedUser) {
        setUser(fetchedUser);
      } else {
        isPending.current = false;
        console.error("Failed to fetch user or no user found.");
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleEditCredentials)}
        className="md:max-w-md w-full space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Display name</FormLabel>
              <FormControl>
                <Input
                  placeholder={user?.user_metadata.name || "Enter name"}
                  {...field}
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
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder={user.email || "Enter email"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isPending.current} className="w-fit">
          Save
        </Button>
      </form>
    </Form>
  );
}
