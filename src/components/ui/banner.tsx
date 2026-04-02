"use client";

import { type HTMLAttributes, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type BannerVariant = "rainbow" | "normal";

export function Banner({
  id,
  variant = "normal",
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  variant?: BannerVariant;
}) {
  const globalKey = id ? `nd-banner-${id}` : null;
  const [open, setOpen] = useState(() => {
    if (!globalKey) return true;
    if (typeof window === "undefined") return true;
    try {
      return window.localStorage.getItem(globalKey) !== "true";
    } catch {
      return true;
    }
  });

  const onClose = () => {
    setOpen(false);
    if (globalKey) localStorage.setItem(globalKey, "true");
  };

  if (!open) return null;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-center",
        variant === "rainbow"
          ? "bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 text-white"
          : "bg-amber-50 text-amber-900 border-b border-amber-200",
        className
      )}
      {...props}
    >
      {children}
      {globalKey && (
        <button
          onClick={onClose}
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 transition-colors",
            variant === "rainbow"
              ? "hover:bg-white/20 text-white/80 hover:text-white"
              : "hover:bg-amber-200/50 text-amber-600 hover:text-amber-800"
          )}
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
