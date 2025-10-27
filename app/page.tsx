import { Button } from "@/components/ui/button";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import WorkCard from "@/components/workCard";
import { ArrowRight, ArrowUpRight, Briefcase, NotepadText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const mainStack = [
    {
      title: "Figma",
      description: "Design tool",
      icon: "/figma.webp",
      href: "https://www.figma.com/",
    },
    {
      title: "Next.js",
      description: "Web Dev Framework",
      icon: "/nextjs.avif",
      href: "https://nextjs.org/",
    },
    {
      title: "Tailwind CSS",
      description: "CSS Framework",
      icon: "/tailwindcss.avif",
      href: "https://tailwindcss.com/",
    },
    {
      title: "Framer",
      description: "Web Design Platform",
      icon: "/framer.avif",
      href: "https://www.framer.com/",
    },
    {
      title: "Stripe",
      description: "Payment Platform",
      icon: "/Stripe.png",
      href: "https://stripe.com/",
    },
    {
      title: "Golang",
      description: "Programming Language",
      icon: "/golang.png",
      href: "https://golang.org/",
    },
  ];

  return (
    <>
      {/*Hero*/}
      <div className="w-full border-b pb-8">
        <h2 className="text-white font-medium mb-2 text-base">Zakary Fofana</h2>
        <p className="relative text-base text-muted-foreground">
          Design technologist and software developer based in Laval, Québec. I
          specialize in <span className="text-white">minimalist</span>,
          UX-driven interfaces. I deliver products that make sense—direct,
          efficient, and built for the end user. I prioritize simplicity and
          clarity.
        </p>
      </div>
      {/*Section 2*/}
      <div className="flex py-8 gap-8 max-lg:flex-col">
        <Link
          href={"https://localcard.live"}
          target="_blank"
          className="relative flex w-full aspect-square md:min-w-100 items-end justify-end overflow-hidden bg-background rounded-3xl border px-4 md:size-100"
        >
          <img
            src="/localcard.png"
            className="absolute inset-0 z-20 m-auto size-20"
          />
          <div className="relative z-20 flex w-full justify-between items-center px-2 py-3 backdrop-blur-[2px] md:px-4">
            <p className="font-medium text-sm text-muted-foreground">
              Digital loyalty platform
            </p>
            <ArrowRight className="size-4 text-muted-foreground" />
          </div>
          <DottedGlowBackground
            className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
            opacity={1}
            gap={10}
            radius={1.6}
            colorLightVar="--color-neutral-500"
            glowColorLightVar="--color-neutral-600"
            colorDarkVar="--color-neutral-500"
            glowColorDarkVar="--color-primary"
            backgroundOpacity={0}
            speedMin={0.3}
            speedMax={1.6}
            speedScale={1}
          />
        </Link>
        <div className="flex-col gap-2 flex justify-end">
          <div>
            <h2 className="text-white font-medium mb-2 text-base">LocalCard</h2>
            <p className="relative text-base text-muted-foreground">
              Co-founded <span className="text-white">LocalCard</span>, a
              digital loyalty platform that enables local businesses to reward
              and retain customers using phone numbers for easy rewards.
              Customers do not need apps or physical cards. I designed and
              launched secure, user-friendly tablet dashboards so merchants can
              set up loyalty programs without complicated POS integrations. My
              focus is to deliver simple, affordable, and effective solutions
              that help small businesses{" "}
              <span className="text-white">compete with larger chains</span>.
            </p>
          </div>
        </div>
      </div>
      {/*Section 3*/}
      <div className="flex gap-8 w-full max-lg:flex-col">
        <div className="border rounded-3xl p-5 w-full grid-cols-2 grid gap-5">
          {/*Item*/}
          {mainStack.map((item, i) => {
            return (
              <Link
                href={item.href}
                target="_blank"
                key={i}
                className="flex justify-between max-lg:bg-accent/40 max-lg:border-border group max-lg:col-span-2 h-[58px] items-center px-1.5 w-full rounded-2xl hover:bg-accent/60 border border-transparent hover:border-border duration-200 relative overflow-hidden"
              >
                <div className="flex gap-3">
                  <div className="size-[46px] rounded-xl  [&_img]:size-full [&_img]:object-cover overflow-hidden ">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                      className="object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-px justify-center">
                    <h2 className="text-white font-semibold text-sm">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div>
                  <ArrowUpRight className="size-4 absolute -top-5 -right-5 group-hover:top-2 group-hover:right-2 duration-200" />
                </div>
              </Link>
            );
          })}
          <Link href={"/stack"} className="col-span-2">
            <Button
              className="bg-accent/40 border rounded-xl hover:bg-accent w-full col-span-2 text-primary text-base font-medium"
              size="lg"
            >
              Show all tools
            </Button>
          </Link>
        </div>
        <WorkCard />
      </div>
    </>
  );
}
