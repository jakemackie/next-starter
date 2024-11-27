import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <form className="max-w-md w-full flex flex-col gap-4">
      <Label htmlFor="email">Your email address</Label>
      <Input id="email" name="email" type="email" required />
      <Label htmlFor="password">Your password</Label>
      <Input id="password" name="password" type="password" required />
      <Button formAction={login}>Log in</Button>
      <Button formAction={signup}>Sign up</Button>
    </form>
  );
}
