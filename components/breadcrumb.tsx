"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export default function BreadcrumbComponent() {
  const pathname = usePathname();

  function getPageLabel(pathname: string) {
    switch (pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About";
      case "/stack":
        return "Stack";
      default:
        return "404";
    }
  }

  const pageLabel = getPageLabel(pathname);

  return (
    <Breadcrumb className="pt-[29px] pb-2.5 pl-8 w-full max-lg:pt-8 max-lg:pb-0 max-lg:pl-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Portfolio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{pageLabel}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
