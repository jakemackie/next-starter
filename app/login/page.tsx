"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login, signup } from "./actions";
import { useState } from "react";
import { Loader2 as Spinner } from "lucide-react";
import { toast as sonner } from "sonner";

export default function LoginPage() {
  const [loggingIn, setLoggingIn] = useState(false);
  const [signingUp, setSigningUp] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="max-w-md w-full flex flex-col gap-4">
        <Label htmlFor="email">Your email address</Label>
        <Input id="email" name="email" type="email" required />
        <Label htmlFor="password">Your password</Label>
        <Input id="password" name="password" type="password" required />

        <Button
          formAction={login}
          variant="default"
          className={`${loggingIn ? "opacity-50 pointer-events-none" : ""}`}
          onClick={() => {
            setLoggingIn(true);
            sonner("Logging you in");
          }}
        >
          <Spinner className={loggingIn ? "animate-spin" : "hidden"} />
          Log in
        </Button>

        <Button
          formAction={signup}
          variant="secondary"
          className={`${signingUp ? "opacity-50 pointer-events-none" : ""}`}
          onClick={() => {
            setSigningUp(true);
            sonner("Signing you up");
          }}
        >
          <Spinner className={signingUp ? "animate-spin" : "hidden"} />
          Sign up
        </Button>
      </form>
    </div>
  );
}
