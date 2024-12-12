import Navbar from "@/components/shared/navbar";
import { Toaster as Sonner } from "@/components/ui/sonner";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="px-4">{children}</main>
      <Sonner />
    </>
  );
}
