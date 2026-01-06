"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({
  classNameIcon,
  className,
}: {
  classNameIcon?: string;
  className?: string;
}) {
  return (
    <>
      <Image
        src="/logo.svg"
        alt="Logo"
        width={32}
        height={32}
        className={cn("h-6 w-auto", classNameIcon)}
      />
      <span
        className={cn(
          "mt-0.5 select-none text-center font-medium font-title text-foreground text-md transition",
          className
        )}
      >
        WAWWW.CHAT
      </span>
    </>
  );
}