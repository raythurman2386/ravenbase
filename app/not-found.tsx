import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-full px-4 py-8 text-center">
      <div className="mb-8"></div>
      <h1 className="text-6xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        404
      </h1>
      <p className="text-2xl mb-4 text-gray-600 dark:text-gray-400">
        Oops! It seems you’ve found a page that doesn’t exist.
      </p>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
        Maybe you've taken a wrong turn somewhere, or the page has just vanished
        into thin air!
      </p>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
        But don't worry, you can always find your way back to the homepage.
      </p>
      <Link
        href="/"
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
      >
        Go back to the homepage
      </Link>
    </main>
  );
}
