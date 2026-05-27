import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayfel Pareja | Creative Web Designer & Systems Developer",
  description: "Crafting minimalist, high-converting digital spaces and sleek, SaaS-level web experiences.",
  icons: {
    icon: "/jp.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground selection:bg-brand-accent/20 selection:text-brand-accent"
        suppressHydrationWarning={true} // 👈 Prevents extension-injected attributes from throwing hydration errors
      >
        {children}
      </body>
    </html>
  );
}