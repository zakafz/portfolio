import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import BreadcrumbComponent from "@/components/breadcrumb";
import ScrollContainer from "@/components/scroll-container";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Zakary Fofana",
    default: "Zakary Fofana - Design Technologist & Software Developer",
  },
  description:
    "Design technologist and software developer in Montreal specializing in minimalist, UX-focused interfaces. Building digital experiences with Next.js, React, and TypeScript.",
  keywords: [
    "Zakary Fofana",
    "design technologist",
    "software developer",
    "Montreal",
    "Next.js",
    "React",
    "TypeScript",
    "web development",
    "UX design",
  ],
  authors: [
    {
      name: "Zakary Fofana",
      url: "https://www.linkedin.com/in/zakary-fofana/",
    },
  ],
  creator: "Zakary Fofana",
  metadataBase: new URL("https://zakary.dev"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://zakary.dev",
    title: "Zakary Fofana - Design Technologist & Software Developer",
    description:
      "Design technologist and software developer in Montreal specializing in minimalist, UX-focused interfaces.",
    siteName: "Zakary Fofana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakary Fofana - Design Technologist & Software Developer",
    description:
      "Design technologist and software developer in Montreal specializing in minimalist, UX-focused interfaces.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-center justify-center h-screen`}
        suppressHydrationWarning
      >
        <ScrollContainer>
          <Header />
          <BreadcrumbComponent />
          <div className="w-full px-8 pt-10 pb-10">{children}</div>
        </ScrollContainer>
      </body>
    </html>
  );
}
