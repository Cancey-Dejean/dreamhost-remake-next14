import { cn } from "@/libs/utils";
import React from "react";

type ContainerProps = {
  className?: string;
  variant?: "primary" | "secondary";
  size?: "large" | "medium";
};

export default function Container({}: ContainerProps) {
  return <div className={cn("max-w-4k mx-auto")}>Container</div>;
}
