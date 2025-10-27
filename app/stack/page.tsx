import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "Tools and technologies used by Zakary Fofana. Explore my development stack including Next.js, Tailwind CSS, Golang, Figma, AI tools like Perplexity and Claude, and productivity tools for building modern web applications.",
  keywords: [
    "tech stack",
    "development tools",
    "Next.js",
    "Tailwind CSS",
    "Golang",
    "Figma",
    "Stripe",
    "Framer",
    "Perplexity",
    "Claude",
    "Zed",
    "Linear",
    "Notion",
    "Vercel",
    "Supabase",
    "Shadcn UI",
  ],
  openGraph: {
    title: "Stack | Zakary Fofana",
    description:
      "Tools and technologies used by Zakary Fofana for web development, design, and productivity.",
    url: "https://zakary.dev/stack",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack | Zakary Fofana",
    description:
      "Tools and technologies used by Zakary Fofana for web development, design, and productivity.",
  },
};
export default function StackPage() {
  const stack = [
    {
      label: "Main stack",
      items: [
        {
          label: "Figma",
          icon: "/figma.webp",
          description: "Cloud-based design and prototyping tool",
          href: "https://www.figma.com/",
        },
        {
          label: "Next.js",
          icon: "/nextjs.avif",
          description: "React framework for building applications",
          href: "https://nextjs.org/",
        },
        {
          label: "Tailwind CSS",
          icon: "/tailwindcss.avif",
          description: "Utility-first CSS framework",
          href: "https://tailwindcss.com/",
        },
        {
          label: "Golang",
          icon: "/golang.png",
          description: "Open-source programming language",
          href: "https://golang.org/",
        },
        {
          label: "Stripe",
          icon: "/stripe.png", 
          description: "Payment processing platform",
          href: "https://stripe.com/",
        },
        {
          label: "Framer",
          icon: "/framer.avif",
          description: "Web Design platform",
          href: "https://framer.com/",
        },
      ],
    },
    {
      label: "AI",
      items: [
        {
          label: "Perplexity Pro",
          icon: "/perplexity.avif",
          description: "AI-powered research and answer engine",
          href: "https://www.perplexity.ai/",
        },
        {
          label: "Zed Pro",
          icon: "/zed.png",
          description: "AI-driven code editor for fast development",
          href: "https://zed.dev/",
        },
        {
          label: "Claude",
          icon: "/claude.webp",
          description: "AI assistant for coding and productivity",
          href: "https://claude.ai/",
        },
        {
          label: "Lovart",
          icon: "/lovart.jpeg",
          description: "AI-powered design generator and image creation",
          href: "https://lovart.ai/",
        },
      ],
    },
    {
      label: "Productivity",
      items: [
        {
          label: "Linear",
          icon: "/linear.png",
          description: "Issue tracking and project management",
          href: "https://linear.app/",
        },
        {
          label: "Notion",
          icon: "/notion.webp",
          description: "All-in-one workspace for notes and docs",
          href: "https://www.notion.so/",
        },
        {
          label: "Comet",
          icon: "/comet.webp",
          description: "Fast and simple browser for productivity",
          href: "https://www.cometbrowser.com/",
        },
      ],
    },
    {
      label: "Design",
      items: [
        {
          label: "Ray.so",
          icon: "/rayso.png",
          description: "Beautiful screenshots for code sharing",
          href: "https://ray.so/",
        },
        {
          label: "Pexels",
          icon: "/pexels.jpg",
          description: "Free stock photos for creatives",
          href: "https://www.pexels.com/",
        },
        {
          label: "Figma",
          icon: "/figma.webp",
          description: "Cloud-based design and prototyping tool",
          href: "https://www.figma.com/",
        },
      ],
    },
    {
      label: "Development",
      items: [
        {
          label: "Vercel",
          icon: "/vercel.png",
          description: "Deployment platform for frontend frameworks",
          href: "https://vercel.com/",
        },
        {
          label: "Supabase",
          icon: "/supabase.png",
          description: "Open-source Firebase alternative",
          href: "https://supabase.com/",
        },
        {
          label: "Shadcn UI",
          icon: "/shadcn.png",
          description: "Re-usable components built with Radix UI",
          href: "https://ui.shadcn.com/",
        },
        {
          label: "Resend",
          icon: "/resend.png",
          description: "Email API for developers",
          href: "https://resend.com/",
        },
      ],
    },
    {
      label: "Other",
      items: [
        {
          label: "Cal.com",
          icon: "/calcom.png",
          description: "Open-source scheduling platform",
          href: "https://cal.com/",
        },
        {
          label: "Loom",
          icon: "/loom.png",
          description: "Async video messaging for teams",
          href: "https://www.loom.com/",
        },
        {
          label: "Mintlify",
          icon: "/mintlify.png",
          description: "Beautiful documentation made easy",
          href: "https://mintlify.com/",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8">
        {stack.map((item, i) => {
          return (
            <div key={i}>
              <div className="pb-4 border-b mb-8">
                <h2 className="text-white font-semibold text-base">
                  {item.label}
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-1">
                {/*Item*/}
                {item.items.map((card, i) => {
                  return (
                    <Link
                      href={card.href}
                      key={i}
                      className="w-full relative overflow-hidden group max-lg:bg-accent/40 max-lg:border-border hover:bg-accent/60 duration-200 cursor-pointer border border-transparent hover:border-border rounded-3xl flex flex-col p-4"
                    >
                      <div className="flex flex-row items-center gap-3">
                        <div className="size-[50px] relative duration-200 rounded-2xl [&_img]:size-full [&_img]:object-cover overflow-hidden ">
                          <Image
                            src={card.icon}
                            alt={card.label}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <h2 className="text-white font-semibold text-base">
                          {card.label}
                        </h2>
                      </div>
                      <p className="text-muted-foreground text-sm mt-3">
                        {card.description}
                      </p>
                      <div>
                        <ArrowUpRight className="size-4 absolute -top-5 -right-5 group-hover:top-4 group-hover:right-4 duration-200" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
