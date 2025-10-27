"use client";
import { useState } from "react";
import { TransitionPanel } from "@/components/motion-primitives/transition-panel";
import { CometCard } from "@/components/ui/comet-card";
import { useRouter } from "next/navigation";
import WorkCard from "@/components/workCard";
export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const ITEMS = [
    {
      title: "About Me",
      subtitle: "Developer & Builder",
      content:
        "I’m a design technologist and software developer with a passion for building minimalist, UX-focused platforms. Skilled in Next.js, React, and TypeScript, I turn complex ideas into elegant, scalable products. My work is centered on crafting intuitive user experiences that are both functional and visually refined.",
      subtitle2: "Entrepreneur",
      content2:
        "As a co-founder, I bring digital products to life from vision to launch. With ventures like Measurely, a real-time analytics platform, and LocalCard, a digital loyalty solution for SMBs. I lead teams to deliver accessible, high-impact solutions. My entrepreneurial approach combines strategic product thinking with practical execution, always aiming for clarity, usability, and real business value.",
    },
    {
      title: "Education",
      subtitle: "Business Administration & Mathematics",
      content:
        "Currently pursuing a DEC at Collège de Bois-de-Boulogne, I’m deepening my expertise in business, finance, and analytical problem-solving. Flexible scheduling allows me to invest significant time in personal projects, applying classroom learning to real-world tech and entrepreneurial initiatives.",
    },
    {
      title: "Professional Experience",
      subtitle: "Localcard - Co-Founder",
      content:
        "Co-founded LocalCard, a digital loyalty platform that enables local businesses to reward and retain customers. I design and launch secure, user-friendly dashboards to help merchants run loyalty programs without complex systems. Driven to deliver simple, affordable solutions for small businesses.",
      subtitle2: "Measurely - Co-Founder & Product Builder",
      content2:
        "Led development and growth of Measurely, an open-source analytics platform for real-time metric tracking and visualization. Oversaw all aspects of product strategy and design, creating a sleek, intuitive dashboard powered by TypeScript. Engineered the frontend experience, designed custom UI components, and integrated developer-friendly APIs for seamless metric monitoring. Delivered solutions for data visualization, team management, and SDK integrations, driving Measurely’s mission to turn raw data into actionable insights for developers and businesses.",
    },
  ];

  return (
    <>
      <div className="flex gap-10 pb-8 border-b mb-8 max-lg:flex-col">
        <div className="w-fit max-lg:w-full max-lg:pointer-events-none h-fit z-10">
          <CometCard>
            <button
              type="button"
              onClick={() => {
                router.push("https://linkedin.com/in/zakary-fofana");
              }}
              className="flex w-80 max-lg:w-full cursor-pointer flex-col items-stretch rounded-2xl border-0 bg-[#1F2121] p-1.5"
              aria-label="View invite F7RA"
              style={{
                transformStyle: "preserve-3d",
                transform: "none",
                opacity: 1,
              }}
            >
              <div className="mx-2 flex-1">
                <div className="relative mt-2 aspect-3/4 w-full">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-2xl bg-[#000000] object-cover"
                    alt="Invite background"
                    src="/zakary.JPG"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
              <div className="mt-2 flex shrink-0 items-center justify-between p-4 font-mono text-white">
                <div className="text-xs">Zakary Fofana</div>
                <div className="text-xs text-gray-300 opacity-50">@zakafz</div>
              </div>
            </button>
          </CometCard>
        </div>
        <div className="flex flex-col">
          <div className="mb-4 flex space-x-2 overflow-x-scroll no-scrollbar">
            {ITEMS.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-md px-3 py-1 whitespace-nowrap text-sm font-medium ${
                  activeIndex === index
                    ? "bg-accent border text-primary"
                    : "bg-accent/40 border text-muted-foreground"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="overflow-hidden border-t border-border">
            <TransitionPanel
              activeIndex={activeIndex}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              variants={{
                enter: { opacity: 0, y: -50, filter: "blur(4px)" },
                center: { opacity: 1, y: 0, filter: "blur(0px)" },
                exit: { opacity: 0, y: 50, filter: "blur(4px)" },
              }}
            >
              {ITEMS.map((item, index) => (
                <div key={index} className="py-8">
                  <h3 className="mb-2 font-medium text-primary">
                    {item.subtitle}
                  </h3>
                  <p className="text-muted-foreground">{item.content}</p>
                  {item.content2 ? (
                    <div>
                      <h3 className="mb-2 mt-8 font-medium text-primary">
                        {item?.subtitle2}
                      </h3>
                      <p className="text-muted-foreground">{item?.content2}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </TransitionPanel>
          </div>
        </div>
      </div>
      <WorkCard />
    </>
  );
}
