import "./globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/theme/theme-provider";

export const metadata: Metadata = {
  title: "Three Axis",
  description: "A Digital Transformation Score",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head />
      <body className="antialiased h-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-full w-full max-w-screen-lg mx-auto px-5 pt-8">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
