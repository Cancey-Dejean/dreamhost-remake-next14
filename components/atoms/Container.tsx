import { cn } from "@/libs/utils";
import React from "react";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-[1968px]", className)}>{children}</div>
  );
}
