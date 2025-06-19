import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EchoScribe - AI-Powered Meeting Summarization",
  description:
    "Convert meeting recordings and lecture videos into structured summaries, action items, and topic insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`h-full ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem ={ false }
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen h-full w-full">
            <main className="flex-1 h-full w-full">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
