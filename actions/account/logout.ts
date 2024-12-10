"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export const logout = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);

  revalidatePath("/", "layout");
};
