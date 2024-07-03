import { cn } from "@/libs/utils";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-[1968px]", className)}>{children}</div>
  );
}
