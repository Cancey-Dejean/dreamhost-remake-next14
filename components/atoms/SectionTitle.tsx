import { cn } from "@/libs/utils";

export default function SectionTitle({
  as = "h1",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) {
  const Element = as;
  return <Element className={cn("font-bold", className)}>{children}</Element>;
}
