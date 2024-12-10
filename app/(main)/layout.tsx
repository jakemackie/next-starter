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
      {children}
      <Sonner />
    </>
  );
}
