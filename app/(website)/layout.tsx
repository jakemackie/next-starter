import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import { Toaster as Sonner } from "@/components/ui/sonner";

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
      </main>
      <Sonner />
      <Footer />
    </>
  );
}
