import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-6 border-t py-2 md:px-4 md:py-0">
      <div className="mx-auto max-w-sm md:max-w-screen-lg">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="https://jakemackie.co.uk"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Jake Mackie
            </Link>
            {". "}
            The source code is available on{" "}
            <Link
              href="https://github.com/jakemackie/next-starter"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            {"."}
          </div>
        </div>
      </div>
    </footer>
  );
}
