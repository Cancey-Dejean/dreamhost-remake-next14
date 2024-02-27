import { cn } from "@/libs/utils";
import React from "react";

export type PillProps = {
  variant?: "primary" | "green";
};

export default function Pill({ variant }: PillProps) {
  return (
    <p
      className={cn(
        "rounded-32 px-3 py-1 font-semibold uppercase leading-none",
        variant === "primary" && "bg-[#d6e5fb] text-primary",
        variant === "green" && "text-green bg-[#d7f5ef]",
      )}
    >
      FOR A LIMITED TIME ONLY
    </p>
  );
}
