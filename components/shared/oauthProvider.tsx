import { oauth } from "@/actions/auth/oauth";
import { Provider } from "@supabase/supabase-js";
import { ReactNode } from "react";

interface OAuthProviderProps {
  provider: Provider;
  children: ReactNode;
}

export default function OAuthProvider({
  provider,
  children,
}: OAuthProviderProps) {
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await oauth(provider);
      }}
    >
      {children}
    </form>
  );
}
