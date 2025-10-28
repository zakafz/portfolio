import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";

import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";

export default function WorkCard() {
  const work = [
    {
      title: "Localcard",
      position: "Co-Founder",
      icon: "/localcard.png",
      href: "https://localcard.live/",
      date: "2025 - Present",
      description:
        "Co-founded LocalCard, a digital loyalty platform that enables local businesses to reward and retain customers using phone numbers for easy rewards. Customers do not need apps or physical cards. I designed and launched secure, user-friendly tablet dashboards so merchants can set up loyalty programs without complicated POS integrations. My focus is to deliver simple, affordable, and effective solutions that help small businesses compete with larger chains.",
    },
    {
      title: "Measurely",
      position: "Co-Founder",
      icon: "/measurely.png",
      href: "https://github.com/measurely-dev/measurely",
      date: "2024 - 2025",
      description:
        "Led development and growth of Measurely, an open-source analytics platform for real-time metric tracking and visualization. Oversaw all aspects of product strategy and design, creating a sleek, intuitive dashboard powered by TypeScript. Engineered the frontend experience, designed custom UI components, and integrated developer-friendly APIs for seamless metric monitoring. Delivered solutions for data visualization, team management, and SDK integrations, driving Measurely’s mission to turn raw data into actionable insights for developers and businesses.",
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
              <MorphingDialog
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 24,
                }}
                key={i}
              >
                <MorphingDialogTrigger className="w-full flex justify-between items-center group">
                  <div className="flex gap-2">
                    <div className="size-[46px] relative group-hover:bg-transparent! duration-200 rounded-lg [&_img]:size-full [&_img]:object-cover overflow-hidden ">
                      <MorphingDialogImage
                        src={item.icon}
                        alt={item.title}
                        className="object-cover object-top"
                      />
                      <div className="absolute flex justify-center items-center border top-0 left-0 group-hover:bg-background/60 w-full h-full group-hover:backdrop-blur-md rounded-lg overflow-hidden duration-200">
                        <ArrowUpRight className="size-5 opacity-0 group-hover:opacity-100 duration-200" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-px justify-center">
                      <MorphingDialogTitle className="text-white font-semibold text-start text-sm ">
                        {item.title}
                      </MorphingDialogTitle>
                      <MorphingDialogSubtitle className="text-muted-foreground text-sm truncate w-full">
                        {item.position}
                      </MorphingDialogSubtitle>
                    </div>
                  </div>
                  <div className="text-muted-foreground text-sm whitespace-nowrap w-fit">
                    {item.date}
                  </div>
                </MorphingDialogTrigger>
                <MorphingDialogContainer>
                  <MorphingDialogContent
                    style={{
                      borderRadius: "24px",
                    }}
                    className="relative h-auto max-h-[90vh] w-[90%] max-w-[500px] border bg-accent"
                  >
                    <ScrollArea className="max-md:h-[90vh]" type="scroll">
                      <div className="relative p-6">
                        <div className="flex pb-10">
                          <MorphingDialogImage
                            src={item.icon}
                            alt={item.title}
                            className="h-auto w-[200px] rounded-3xl"
                          />
                        </div>
                        <div className="">
                          <MorphingDialogTitle className="font-semibold text-xl flex gap-2 justify-between items-center">
                            {item.title}{" "}
                            <span className="text-muted-foreground text-sm font-medium">
                              {item.date}
                            </span>
                          </MorphingDialogTitle>
                          <MorphingDialogSubtitle className="text-muted-foreground text-sm mt-1 font-medium flex gap-2 justify-between items-center">
                            {item.position}
                            <a
                              href={item.href}
                              target="_blank"
                              className="text-primary flex gap-0.5 items-center text-sm font-medium hover:underline"
                            >
                              Learn more <ArrowUpRight className="size-4" />
                            </a>
                          </MorphingDialogSubtitle>
                          <Separator className="mt-4" />
                          <div className="mt-8 text-sm text-muted-foreground">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    </ScrollArea>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
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
