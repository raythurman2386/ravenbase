import Link from "next/link";
import { BuyMeACoffee } from "../icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-gray-500">
        &copy; {currentYear}{" "}
        <a
          className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline"
          href="https://twitter.com/raythurman2386"
          target="_blank"
          rel="noopener noreferrer"
        >
          Raymond Thurman
        </a>
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6 items-center">
        <a
          href="https://www.buymeacoffee.com/raythurman"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-primary bg-primary-foreground text-primary py-2 px-2 transition-all duration-75 hover:scale-105"
        >
          <BuyMeACoffee className="h-6 w-6" />
          <p className="font-medium">Buy me a coffee</p>
        </a>
        <Link
          href="/tos"
          className="text-xs underline-offset-4 hover:underline"
          prefetch={false}
        >
          Terms of Service
        </Link>
        <Link
          href="/privacy"
          className="text-xs underline-offset-4 hover:underline"
          prefetch={false}
        >
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
