import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function WorkCard() {
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
    <div className="bg-background rounded-3xl p-5 w-full flex flex-col justify-between">
      <div>
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
                <div className="text-muted-foreground text-sm">{item.date}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <Link href={"https://linkedin.com/in/zakary-fofana"} className="mt-8">
        <Button
          className="bg-accent/40 border rounded-xl hover:bg-accent w-full col-span-2 text-primary text-base font-medium"
          size="lg"
        >
          View full resume <ArrowUpRight />
        </Button>
      </Link>
    </div>
  );
}
