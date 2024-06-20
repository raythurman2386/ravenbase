import Link from "next/link";
import { Dev } from "../icons";
import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Dev className="h-6 w-6" />
        <span className="sr-only">RavenBase</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <ThemeToggle />
      </nav>
    </header>
  );
}
