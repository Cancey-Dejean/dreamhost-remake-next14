import { cn } from "@/libs/utils";

export type SectionTitleProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children?: React.ReactNode;
  text?: string;
  className?: string;
};

export default function SectionTitle({
  as: Comp = "h1",
  children,
  className,
  text = "Title",
}: SectionTitleProps) {
  return <Comp className={cn("font-bold", className)}>{children || text}</Comp>;
}
