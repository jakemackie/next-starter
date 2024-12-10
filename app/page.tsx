import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="min-h-[90vh] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60" fill="white" />
      <div className="flex flex-col items-center p-4 max-w-7xl mx-auto relative z-10 w-full pt-40 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Next starter <br /> template.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          A starter template that lets you build scalable modern web
          applications that look damn good.
        </p>
        <Link href="/login" className="mt-4">
          <Button variant="outline">Login</Button>
        </Link>
      </div>
    </div>
  );
}
