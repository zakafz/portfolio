"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import { useEffect, useState } from "react";
import Header from "./header";

export default function ScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsMounted(true);

    const checkScrollable = () => {
      const scrollContainer = document.getElementById("scroll-container");
      if (scrollContainer) {
        const hasOverflow =
          scrollContainer.scrollHeight > scrollContainer.clientHeight;
        setIsScrollable(hasOverflow);
      }
    };

    const handleScroll = (e: Event) => {
      const element = e.target as HTMLDivElement;
      const scrollHeight = element.scrollHeight;
      const scrollTop = element.scrollTop;
      const clientHeight = element.clientHeight;
      const isBottom = scrollHeight - scrollTop - clientHeight < 5;
      setIsScrolledToBottom(isBottom);
    };

    const scrollContainer = document.getElementById("scroll-container");
    if (scrollContainer) {
      checkScrollable();
      scrollContainer.addEventListener("scroll", handleScroll);
      const resizeObserver = new ResizeObserver(checkScrollable);
      resizeObserver.observe(scrollContainer);

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <>
      <div
        id="scroll-container"
        className="w-[90vw] max-lg:w-[95vw] z-10 border h-[88vh] max-lg:h-[92vh] rounded-4xl bg-[#161616] relative overflow-y-scroll overflow-x-visible no-scrollbar"
      >
        {isMobile ? <Header /> : ""}
        {children}
        <div className="mb-4 pt-4 border-t lg:hidden text-muted-foreground text-sm flex items-center justify-center">
          © {new Date().getFullYear()} Zakary Fofana. All rights reserved.
        </div>
      </div>
      {isMounted && isScrollable && (
        <div
          className="absolute bg-[#161616] flex max-lg:hidden items-center justify-center border border-t-0 text-sm z-0 h-[30px] px-5 rounded-b-xl text-muted-foreground"
          suppressHydrationWarning
          style={{
            bottom: isScrolledToBottom ? "calc(6vh - 30px)" : "6vh",
            transition: "all 0.3s ease-in-out",
          }}
        >
          © {new Date().getFullYear()} Zakary Fofana. All rights reserved.
        </div>
      )}
    </>
  );
}
