import Footer from "@/components/shared/footer";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto relative min-h-screen flex flex-col items-center">
      {children}
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </main>
  );
}
