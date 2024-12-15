"use server";

import { createClient } from "@/supabase/server";
import type { User } from "@supabase/supabase-js";

export const getUser = async () => {
  const supabase = await createClient();

  console.log("getUser");

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    console.log(error);
    return false;
  }

  return data.user as User;
};
