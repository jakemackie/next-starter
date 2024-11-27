import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next starter",
  description: "Next starter by Jake Mackie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased dark`}>
        <div className="px-3 min-h-screen w-full flex flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
