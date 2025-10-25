"use client";

import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = (e: Event) => {
      const element = e.target as HTMLDivElement;
      const scrollHeight = element.scrollHeight;
      const scrollTop = element.scrollTop;
      const clientHeight = element.clientHeight;

      // Check if scrolled to bottom (with 5px threshold for smooth detection)
      const isBottom = scrollHeight - scrollTop - clientHeight < 5;
      setIsScrolledToBottom(isBottom);
    };

    const scrollContainer = document.getElementById("scroll-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex items-center justify-center h-screen`}
      >
        <div
          id="scroll-container"
          className="w-[90vw] z-10 border h-[88vh] rounded-4xl bg-[#161616] relative overflow-scroll no-scrollbar"
        >
          <Header />
          <Breadcrumb className="pt-[29px] pb-2.5 pl-8 w-full">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Portfolio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="w-full px-8 pt-10 pb-10">{children}</div>
        </div>
        <div
          className="absolute bg-[#161616] flex items-center justify-center border border-t-0 text-sm z-0 h-[30px] px-5 rounded-b-xl text-muted-foreground"
          style={{
            bottom:
              isMounted && isScrolledToBottom ? "calc(6vh - 30px)" : "6vh",
            transition: "all 0.3s ease-in-out",
          }}
        >
          © {new Date().getFullYear()} Zakary Fofana. All rights reserved.
        </div>
      </body>
    </html>
  );
}
