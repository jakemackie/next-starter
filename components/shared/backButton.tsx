import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import ChevronLeft from "@/components/ui/icons/chevronLeft";

export default function BackButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant={"secondary"}>
      <ChevronLeft className="text-foreground" />
      Back
    </Button>
  );
}
