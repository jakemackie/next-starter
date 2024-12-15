import Link from "next/link";
import { Button } from "@/components/ui/button";
import ChevronRight from "@/components/ui/icons/chevronRight";
import Image from "next/image";
import AlertButton from "@/components/ui/alert-button";

export default async function Home() {
  return (
    <div className="mx-auto mt-content relative container px-4 lg:px-0">
      {/* Heading, subtext and CTAs */}
      <div className="mx-auto max-w-sm md:max-w-screen-lg">
        {/* Alert button */}
        <div className="mx-auto text-center mb-8">
          <AlertButton>We&rsquo;re now GDPR compliant</AlertButton>
        </div>

        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl text-center md:text-left font-semibold leading-tight md:leading-snug tracking-tighter">
          {/* Mobile */}
          <span className="block md:hidden">
            Sell your idea to an audience.
          </span>
          {/* Desktop */}
          <span className="hidden md:block">
            Next starter let&rsquo;s you sell your idea to an audience.
          </span>
        </h1>

        {/* Subtext */}
        <div className="max-w-screen-md">
          <p className="mt-4 md:mt-8 font-medium text-xl text-muted-foreground text-center text-balance md:text-left leading-snug tracking-tight">
            A short description of what you&rsquo;re offering, the problem it
            solves and why it&rsquo;s better than the competition.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
          <Link href={"/login"}>
            <Button className="w-fit py-5 md:py-6 px-6 rounded-lg text-base md:text-lg">
              Get started
            </Button>
          </Link>

          <Button
            className="w-fit py-5 md:py-6 px-6 rounded-lg text-base md:text-lg"
            variant="ghost"
          >
            Introducing our newest feature
            <ChevronRight />
          </Button>
        </div>

        {/* Hero media */}
        <div className="w-full h-auto aspect-video p-1 bg-foreground relative mt-12 md:mt-32 rounded-xl overflow-clip">
          <Image
            src="/image.jpg"
            alt="Hero image"
            width={600}
            height={400}
            className="w-full rounded-lg object-cover aspect-video"
          />
        </div>
      </div>
    </div>
  );
}
