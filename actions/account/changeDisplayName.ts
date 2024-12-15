"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/supabase/server";

export const changeDisplayName = async (newName: string) => {
  if (!newName || typeof newName !== "string") {
    throw new Error("Invalid name provided.");
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.updateUser({
    data: {
      name: newName,
    },
  });

  if (error) throw new Error(error.message);

  revalidatePath("/", "layout");

  return data;
};
