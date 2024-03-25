import Image from "next/image";
import { cn } from "../../../libs/utils";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export type ButtonLinkProps = {
  as: "a" | "button";
  variant?:
    | "primary-solid"
    | "primary-bordered"
    | "primary-text"
    | "primary-ghost"
    | "default-ghost"
    | "inverted-ghost";
  icon?: string;
  iconPositionRight?: boolean;
  showLinkArrow?: boolean;
  size: "small" | "medium" | "large";
  className?: string;
  label?: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonLink({
  as = "a",
  variant = "primary-solid",
  size,
  label,
  showLinkArrow,
  icon,
  iconPositionRight,
  className,
  ...rest
}: ButtonLinkProps) {
  const Element = as;
  return (
    <Element
      className={cn(
        "flex items-center justify-center gap-4 rounded-16 border-4 border-transparent bg-transparent text-xl/[1.25rem] font-bold capitalize leading-[1]",
        className,
        variant === "primary-solid"
          ? "border-primary bg-primary text-white"
          : "",
        variant === "primary-text"
          ? "border-transparent bg-transparent text-primary"
          : "",
        variant === "inverted-ghost" ? "border-white text-white" : "",
        variant === "default-ghost" ? "border-black" : "",
        size === "small" ? "px-4 py-[14px]" : "",
        size === "medium" ? "px-5 py-[18px]" : "",
        size === "large" ? "px-8 py-6" : "",
      )}
      {...rest}
    >
      <div
        className={cn(
          "flex items-center gap-2",
          iconPositionRight ? "flex-row-reverse" : "flex-row",
        )}
      >
        {icon && (
          <Image
            src={icon || "/images/play.svg"}
            alt="hero"
            width={24}
            height={24}
          />
        )}
        <span>{label || "Button"}</span>
      </div>

      {showLinkArrow && <FaArrowRightLong />}
    </Element>
  );
}
