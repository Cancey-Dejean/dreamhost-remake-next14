import { cn } from "@/libs/utils";

export type PillProps = {
  variant?: "primary" | "green";
  className?: string;
  text: string;
};

export default function Pill({ variant, className, text }: PillProps) {
  return (
    <p
      className={cn(
        "rounded-32 px-3 py-1 font-semibold uppercase leading-none",
        variant === "primary" && "bg-[#d6e5fb] text-primary",
        variant === "green" && "bg-[#d7f5ef] text-green",
        className,
      )}
    >
      {text || "Sale"}
    </p>
  );
}
