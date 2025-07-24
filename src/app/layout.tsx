import type { Metadata } from "next";
import "./globals.css";
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
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          storageKey="portfolio-theme"
        >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
