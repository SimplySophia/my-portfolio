import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";


export const metadata: Metadata = {
  title: "Sophia Vincent",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" suppressHydrationWarning>
      
      <body className="overflow-x-hidden min-h-screen bg-(--color-bg) text-(--color-text-primary) transition-colors duration-300">
      <ThemeProvider>
      <Navbar />
      <div className="absolute inset-0 -z-10" />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
      </ThemeProvider >
      </body>
    </html>
  );
}

