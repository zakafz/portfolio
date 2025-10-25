import { Button } from "@/components/ui/button";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
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

  const work = [
    {
      title: "Localcard",
      position: "Co-Founder",
      icon: "/localcard.png",
      href: "https://localcard.live/",
      date: "2025 - Present",
    },
    {
      title: "Measurely",
      position: "Co-Founder & Product Designer",
      icon: "/measurely.png",
      href: "https://github.com/measurely-dev/measurely",
      date: "2024 - 2025",
      bg: "#ffffff",
    },
  ];

  return (
    <>
      {/*Hero*/}
      <div className="w-full border-b pb-8">
        <h2 className="text-white font-medium mb-2 text-base">Quick recap</h2>
        <p className="relative text-base text-muted-foreground">
          It's been <span className="text-white">13 years</span> since I got
          into design. I&nbsp;now have clear principles, the main one being{" "}
          <span className="text-white">
            “value instead of mindless execution”
          </span>
          . It's easy to print generic solutions, but what we designers are
          hired for is our unique point of view and creative thinking. Usability
          combined with aesthetics is the key to memorable and&nbsp;enjoyable
          products. This&nbsp;is&nbsp;what I've been applying in my{" "}
          <a
            href="https://queelp.com"
            target="_blank"
            className="rounded text-white underline ds:hover:no-underline"
            data-umami-event="design-agency"
          >
            design&nbsp;practice&nbsp;↗
          </a>{" "}
          since day one.
        </p>
      </div>
      {/*Section 2*/}
      <div className="flex py-8 gap-8">
        <Link
          href={"https://localcard.live"}
          target="_blank"
          className="relative flex size-60 min-w-60 md:min-w-100 items-end justify-end overflow-hidden bg-background rounded-3xl border px-4 md:size-100"
        >
          <img
            src="/localcard.png"
            className="absolute inset-0 z-20 m-auto size-10 md:size-20"
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
            <h2 className="text-white font-medium mb-2 text-base">
              LocalCard
            </h2>
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
      <div className="flex gap-8 w-full">
        <div className="border rounded-3xl p-5 w-full grid-cols-2 grid gap-5">
          {/*Item*/}
          {mainStack.map((item, i) => {
            return (
              <Link
                href={item.href}
                target="_blank"
                key={i}
                className="flex justify-between group h-[58px] items-center px-1.5 w-full rounded-2xl hover:bg-accent/60 border border-transparent hover:border-border duration-200 relative overflow-hidden"
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
          <Link href={'/stack'} className="col-span-2">
            <Button
              className="bg-accent/40 border rounded-xl hover:bg-accent w-full col-span-2 text-primary text-base font-medium"
              size="lg"
            >
              Show all tools
            </Button>
          </Link>
        </div>
        <div className="bg-background rounded-3xl p-5 w-full flex flex-col">
          <div className="flex justify-between items-center w-full pb-5">
            <h2 className="text-white font-semibold text-base">Work</h2>
          </div>
          <div className="gap-8 flex flex-col">
            {/*Item*/}
            {work.map((item, i) => {
              return (
                <Link
                  href={item.href}
                  target="_blank"
                  className="w-full flex justify-between items-center group"
                  key={i}
                >
                  <div className="flex gap-2">
                    <div
                      className="size-[46px] relative group-hover:bg-transparent! duration-200 rounded-lg [&_img]:size-full [&_img]:object-cover overflow-hidden "
                      style={{ background: item.bg ? item.bg : "" }}
                    >
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                      <div className="absolute flex justify-center items-center border top-0 left-0 group-hover:bg-background/60 w-full h-full group-hover:backdrop-blur-md rounded-lg overflow-hidden duration-200">
                        <ArrowUpRight className="size-5 opacity-0 group-hover:opacity-100 duration-200" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-px justify-center">
                      <h2 className="text-white font-semibold text-sm">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {item.position}
                      </p>
                    </div>
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {item.date}
                  </div>
                </Link>
              );
            })}
          </div>
          <Link
            href={"https://linkedin.com/in/zakary-fofana"}
            className="mt-auto"
          >
            <Button
              className="bg-accent/40 border rounded-xl hover:bg-accent w-full col-span-2 text-primary text-base font-medium"
              size="lg"
            >
              View full resume <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
