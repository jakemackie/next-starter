"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login, signup } from "./actions";
import { useState } from "react";
import { 
  Loader2 as Spinner,
  Github,
  Twitter
} from "lucide-react";
import { toast as sonner } from "sonner";

export default function LoginPage() {
  const [loggingIn, setLoggingIn] = useState(false);
  const [signingUp, setSigningUp] = useState(false);
  return (
    <form className="min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-md w-full flex flex-col gap-4">
        <Label htmlFor="email">Your email address</Label>
        <Input id="email" name="email" type="email" required />
        <Label htmlFor="password">Your password</Label>
        <Input id="password" name="password" type="password" required />

        <Button
          formAction={login}
          variant="default"
          type="submit"
          className={`${loggingIn ? "opacity-50 pointer-events-none" : ""}`}
          onClick={() => {
            setLoggingIn(true);
            sonner("Logging you in via email");
          }}
        >
          <Spinner className={loggingIn ? "animate-spin" : "hidden"} />
          Log in
        </Button>

        <Button
          formAction={signup}
          variant="secondary"
          type="submit"
          className={`${signingUp ? "opacity-50 pointer-events-none" : ""}`}
          onClick={() => {
            setSigningUp(true);
            sonner("Signing you up via email");
          }}
        >
          <Spinner className={signingUp ? "animate-spin" : "hidden"} />
          Sign up
        </Button>
      </div>

      <div className="max-w-md w-full border border-zinc-800 my-8" />

      <div className="max-w-md w-full flex flex-col gap-4">
        <Button
          formAction={login}
          variant="outline"
          type="submit"
          className={`${loggingIn ? "opacity-50 pointer-events-none" : ""}`}
          onClick={() => {
            setLoggingIn(true);
            sonner("Logging you in via GitHub");
          }}
        >
          <Github className={loggingIn ? "hidden" : "size-5"} />
          <Spinner className={loggingIn ? "animate-spin" : "hidden"} />
          GitHub
        </Button>

        <Button
          formAction={login}
          variant="outline"
          type="submit"
          className={`${loggingIn ? "opacity-50 pointer-events-none" : ""}`}
          onClick={() => {
            setLoggingIn(true);
            sonner("Logging you in via Twitter");
          }}
        >
          <Twitter className={loggingIn ? "hidden" : "size-5"} />
          <Spinner className={loggingIn ? "animate-spin" : "hidden"} />
          Twitter
        </Button>
      </div>
    </form>
  );
}
