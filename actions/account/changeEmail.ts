"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/supabase/server";

export const changeEmail = async (newEmail: string) => {
  if (!newEmail || typeof newEmail !== "string") {
    throw new Error("Invalid email provided.");
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.updateUser({
    email: newEmail,
  });

  if (error) throw new Error(error.message);

  revalidatePath("/", "layout");

  return data;
};
