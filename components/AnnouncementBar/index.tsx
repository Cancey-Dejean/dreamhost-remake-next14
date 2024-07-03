"use client";
import Link from "next/link";
import { LiaTagsSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";
import Select from "../Select";
import { announcementBarMenu } from "@/constants";

type AnnouncementBarProps = {
  announcementText: string;
  announcementIcon?: "none" | "sale" | "arrowRight";
  url?: string;
};

const Icons = {
  sale: <LiaTagsSolid className="text-xl" />,
  arrowRight: <FaArrowRightLong />,
  none: null,
};

export default function AnnouncementBar({
  announcementText,
  url,
  announcementIcon = "none",
}: AnnouncementBarProps) {
  return (
    <div className="flex items-center justify-between bg-primary px-8 py-2 text-xs text-white md:py-3 md:text-base">
      <div className="hidden items-center gap-2 text-base leading-none lg:flex">
        {/* Render selected icon */}
        {announcementIcon !== "none" && <span>{Icons[announcementIcon]}</span>}

        {url ? (
          <Link
            href={url}
            className="flex items-center gap-2 border-b border-b-transparent py-0.5 text-base   transition-all duration-300 ease-in-out hover:border-white"
          >
            {announcementText}
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        ) : (
          <p>{announcementText}</p>
        )}
      </div>

      <div className="flex w-full items-center justify-between gap-2 lg:w-auto">
        <ul className="flex items-center gap-4">
          {announcementBarMenu.map(({ url, label }) => (
            <li key={`link-${label}`}>
              <Link className="text-xs text-white md:text-base" href={url}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <BsGlobe2 />
          <Select />
        </div>
      </div>
    </div>
  );
}
