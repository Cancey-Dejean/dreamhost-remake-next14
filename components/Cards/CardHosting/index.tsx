import { Pill, SectionTitle } from "@/components";
import { cn } from "@/libs/utils";
import { dir } from "console";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export type CardHostingProps = {
  url?: string;
  showPill?: boolean;
  pillText?: string;
  cornerImgSrc?: string;
  cardHeadTitle?: string;
  cardHeadDescription?: string;
  cardBodyTitle?: string;
  cardBodyDescription?: string;
  linkableText?: string;
  linkableUrl?: string;
  className?: string;
  direction?: "horizontal" | "vertical";
};

export default function CardHosting({
  showPill = false,
  cornerImgSrc,
  cardHeadTitle,
  cardHeadDescription,
  cardBodyTitle,
  cardBodyDescription,
  className,
  linkableText,
  linkableUrl,
  direction = "vertical",
}: CardHostingProps) {
  return (
    <div
      className={cn(
        "link-block group relative rounded-32 bg-white p-16 transition-shadow duration-300 hover:shadow-md",
        direction === "horizontal" && "grid items-center lg:grid-cols-16",
        direction === "vertical" &&
          "flex flex-col items-start justify-between ",
        className,
      )}
    >
      {/* ShowPill */}
      {showPill && (
        <Pill variant="primary" className="absolute -top-3 right-16" />
      )}

      {/* Corner Image */}
      {cornerImgSrc && (
        <div className="absolute right-0 top-0 hidden lg:block">
          <svg
            fill="none"
            height="75"
            viewBox="0 0 77 75"
            width="77"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#00caaa" stroke-width="10.9468">
              <path d="m110.099 17.1731c0 28.8549-23.3924 52.2466-52.2481 52.2466-28.8556 0-52.2476-23.3917-52.2476-52.2466s23.392-52.2466 52.2476-52.2466c28.8557 0 52.2481 23.3917 52.2481 52.2466z"></path>
              <path d="m87.4468 15.6425c0 16.1441-13.0877 29.2316-29.2323 29.2316-16.1447 0-29.2323-13.0875-29.2323-29.2316 0-16.144053 13.0876-29.2316 29.2323-29.2316 16.1446 0 29.2323 13.087547 29.2323 29.2316z"></path>
            </g>
          </svg>
        </div>
      )}

      {/* Card Header */}
      {cardHeadTitle && (
        <div
          className={cn(
            direction === "horizontal" &&
              "col-span-full hidden lg:col-start-7 lg:block",
          )}
        >
          <SectionTitle
            as="h4"
            className="mb-4 break-words text-4xl 2xl:text-6xl"
          >
            {cardHeadTitle}
          </SectionTitle>

          {cardHeadDescription && <p className="mb-8">{cardHeadDescription}</p>}
        </div>
      )}

      {/* Card Body */}
      <div
        className={cn(
          "",
          direction === "horizontal" && "col-span-5 row-start-1",
          direction === "vertical" && "flex items-center",
          className,
        )}
      >
        <div className="flex flex-col">
          <div className="mb-2 flex items-center gap-6">
            <Image src="/images/wp-hosting.svg" width={60} height={72} alt="" />
            <div className="relative w-full leading-none">
              <div className="absolute left-0 right-0 top-[50%] z-10 h-[4px] w-full translate-y-[-50%] bg-gradient-to-r from-primary to-[#0072ec00]"></div>
            </div>
          </div>

          <SectionTitle as="h4" className="mb-4 text-3xl xl:text-4xl">
            {cardBodyTitle}
          </SectionTitle>

          {cardBodyDescription && (
            <p className="text-base xl:text-lg">{cardBodyDescription}</p>
          )}

          {linkableText && (
            <div
              className={cn(
                "mt-8 flex items-center gap-2 text-2xl font-bold",
                linkableUrl && " group-hover:underline",
              )}
            >
              {linkableText}
              {linkableUrl && (
                <Link href={linkableUrl || "#"}>
                  <FaArrowRight className="text-xl text-primary" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
