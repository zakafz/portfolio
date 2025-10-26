import { Metadata } from "next";
import AboutPage from "./aboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Zakary Fofana - design technologist, software developer, and entrepreneur. Co-founder of LocalCard and Measurely, building minimalist platforms with Next.js, React, and TypeScript.",
  keywords: [
    "Zakary Fofana",
    "about",
    "developer",
    "entrepreneur",
    "LocalCard",
    "Measurely",
    "design technologist",
    "business administration",
    "Montreal developer",
  ],
  openGraph: {
    title: "About | Zakary Fofana",
    description:
      "Learn about Zakary Fofana - design technologist, software developer, and co-founder of LocalCard and Measurely.",
    url: "https://zakary.dev/about",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Zakary Fofana",
    description:
      "Learn about Zakary Fofana - design technologist, software developer, and entrepreneur.",
  },
};

export default function About() {
  return <AboutPage />;
}
