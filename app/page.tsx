import { ThemeToggle } from "@/components/theme-toggle";
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <ThemeToggle />
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 lg:grid-cols-3 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo }) => (
          <Card
            key={title}
            className="flex flex-col items-center justify-between"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            {demo}
            <CardContent />

            <CardFooter />
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
    description: "Precedent offers a collection of hooks and utilities",
    demo: (
      <div className="grid grid-flow-col grid-rows-6 lg:grid-rows-3 gap-6">
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
