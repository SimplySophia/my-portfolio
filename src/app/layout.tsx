import type { Metadata } from "next";
import "./globals.css";


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
      
      <body className="overflow-x-hidden min-h-screen bg-[url('/background3.png')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/40 -z-10" />
      <main className="relative z-10">{children}</main>


      </body>
    </html>
  );
}

