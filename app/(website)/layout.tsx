import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="min-h-fit-screen w-full flex flex-col items-center">
        {children}
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
        />
      </main>
      <Sonner />
      <Footer />
    </>
  );
}
