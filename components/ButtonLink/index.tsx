import { cn } from "../../libs/utils";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonLinkProps = {
  as: "a" | "button";
  variant?:
    | "primary-solid"
    | "primary-bordered"
    | "primary-text"
    | "primary-ghost"
    | "default-ghost"
    | "inverted-ghost";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  size?: "small" | "medium" | "large";
  className?: string;
  label?: React.ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

import React from "react";

export default function ButtonLink({
  as = "a",
  variant = "primary-solid",
  size,
  label,
  icon,
  iconPosition,
  className,
  ...rest
}: ButtonLinkProps) {
  const Element = as;
  return (
    <Element
      className={cn(
        "rounded-2xl px-8 py-6 font-semibold capitalize leading-[1]",
        className,
        variant === "primary-solid" ? "bg-primary text-white" : "",
        variant === "default-ghost" ? "border-2 border-black" : "",
        size === "small" ? "py-3" : "",
        size === "medium" ? "py-4" : "",
        // iconPosition === "left" ? "flex items-center" : ""
      )}
      {...rest}
    >
      {icon}
      <span>{label || "Button"}</span>
    </Element>
  );
}

// const ButtonLink = ({
//   as = "a",
//   variant = "primary-solid",
//   size,
//   label,
//   icon,
//   iconPosition,
//   className,
//   ...rest
// }: ButtonLinkProps) => {
//   const Element = as;
//   return (
//     <Element
//       className={cn(
//         "rounded-2xl px-8 py-6 font-semibold capitalize leading-[1]",
//         className,
//         variant === "primary-solid" ? "bg-primary text-white" : "",
//         variant === "default-ghost" ? "border-2 border-black" : "",
//         size === "small" ? "py-3" : "",
//         size === "medium" ? "py-4" : "",
//         // iconPosition === "left" ? "flex items-center" : ""
//       )}
//       {...rest}
//     >
//       {icon}
//       <span>{label || "Button"}</span>
//     </Element>
//   );
// };

// export default ButtonLink;
