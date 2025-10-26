import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you are looking for could not be found. Return to the homepage to continue browsing.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="w-full justify-center items-center h-full flex flex-col pt-20">
      <h2 className="text-8xl font-mono font-semibold">404</h2>
      <p className="mt-5 text-xl text-muted-foreground">
        Could not find requested page
      </p>
      <Button className="mt-8" variant={"outline"}>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
