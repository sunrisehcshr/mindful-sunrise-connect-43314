"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-barlow">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold mb-4 text-amber-600">404</h1>
        <p className="text-xl text-stone-700 mb-6 font-semibold">Oops! Page not found</p>
        <p className="text-stone-600 mb-8">
          The page you are looking for ({pathname}) might have been removed, 
          had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
