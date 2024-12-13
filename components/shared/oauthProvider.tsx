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

        const button = event.currentTarget.querySelector("button");

        if (button) {
          button.setAttribute("disabled", "true");
        }

        try {
          await oauth(provider);
        } catch {
          if (button) {
            button.removeAttribute("disabled");
          }
        }
      }}
    >
      {children}
    </form>
  );
}
