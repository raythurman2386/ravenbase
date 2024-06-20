import { Github } from "@/components/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WebVitals from "@/components/web-vitals";
import { DEPLOY_URL } from "@/lib/constants";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-xl px-5 xl:px-0 text-primary">
        <div className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors">
          <Github className="h-5 w-5 text-[#1d9bf0]" />
          <span className="text-sm font-semibold text-[#1d9bf0]">
            Introducing RavenBase
          </span>
        </div>
        <h1
          className="animate-fade-up text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-snug lg:text-6xl lg:leading-snug"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Building blocks for your next project
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-lg md:text-xl lg:text-2xl [text-wrap:balance]"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          A collection of components, hooks, and utilities for your Next.js
          projects, ready for deployment.
        </p>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 lg:grid-cols-3 gap-5 px-5 md:grid-cols-2 xl:px-0">
        {features.map(({ title, description, demo }) => (
          <Card
            key={title}
            className="flex flex-col items-center justify-between p-4"
          >
            <CardHeader className="w-full">
              <CardTitle className="text-lg md:text-xl lg:text-2xl text-center">
                {title}
              </CardTitle>
              <CardDescription className="text-sm md:text-base lg:text-lg text-center mt-2">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-grow items-center justify-center w-full mt-4">
              {demo}
            </CardContent>
            <CardFooter className="w-full" />
          </Card>
        ))}
      </div>
    </main>
  );
}

const features = [
  {
    title: "Performance first",
    description:
      "Built on Next.js and Shadecn primitives for stellar performance.",
    demo: <WebVitals />,
  },
  {
    title: "One-click Deploy",
    description: "Jumpstart your next project by deploying in one click.",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Hooks, utilities, and more",
    description: "RavenBase offers a collection of hooks and utilities",
    demo: (
      <div className="grid grid-flow-col grid-rows-6 lg:grid-rows-3 gap-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];
