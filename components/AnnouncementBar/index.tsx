"use client";
import Link from "next/link";
import { LiaTagsSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";

type AnnouncementBarProps = {
  linkableAnnouncement?: boolean;
  announcementIcon?: "none" | "sale" | "arrowRight";
  announcementText: string;
};

const announcementBarMenu = [
  {
    id: 1,
    label: "Affiliates",
    url: "/affiliates/",
  },
  {
    id: 2,
    label: "Knowledge Base",
    url: "#knowledge-base",
  },
  {
    id: 3,
    label: "News",
    url: "#news",
  },
  {
    id: 4,
    label: "Support",
    url: "#support",
  },
];

export default function AnnouncementBar({
  announcementText,
  linkableAnnouncement,
  announcementIcon,
}: AnnouncementBarProps) {
  const renderIcon = () => {
    switch (announcementIcon) {
      case "sale":
        return <LiaTagsSolid className="text-xl" />;
      case "arrowRight":
        return <FaArrowRightLong />;
      case "none":
      default:
        return null;
    }
  };

  return (
    <div className="text-xs flex items-center justify-between bg-primary px-8 py-2 text-white md:py-3 md:text-base">
      <div className="hidden items-center gap-2 text-base leading-none lg:flex">
        {renderIcon()}

        {linkableAnnouncement ? (
          <Link
            href="/"
            className="flex items-center gap-2 border-b border-b-transparent py-0.5 transition-all   duration-300 ease-in-out hover:border-white"
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
          {announcementBarMenu.map((item) => (
            <li key={item.id}>
              <Link className="text-xs text-white md:text-base" href={item.url}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="flex items-center gap-2"
          onClick={() => alert("Language Dropdown")}
        >
          <span>
            <BsGlobe2 />
          </span>
          English
        </button>
      </div>
    </div>
  );
}
