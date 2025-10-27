"use client";
import BreadcrumbComponent from "@/components/breadcrumb";
import Header from "@/components/header";
import ScrollContainer from "@/components/scroll-container";
import { useIsMobile } from "@/hooks/use-is-mobile";

export default function PortfolioLayout(props: { children: any }) {
  const isMobile = useIsMobile();
  return (
    <ScrollContainer>
      <div className="opacity-0 animate-fade-in">
        {isMobile ? null : <Header />}
        <BreadcrumbComponent />
        <div className="w-full px-8 pt-10 pb-10 max-lg:px-4">
          {props.children}
        </div>
      </div>
    </ScrollContainer>
  );
}
