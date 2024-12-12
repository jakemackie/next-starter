"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/supabase/server";

export async function signUp(email: string, password: string) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) throw new Error(error.message);

  revalidatePath("/", "layout");
}
