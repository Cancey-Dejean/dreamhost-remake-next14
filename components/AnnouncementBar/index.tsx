"use client";
import Link from "next/link";
import { LiaTagsSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsGlobe2 } from "react-icons/bs";

type AnnouncementBarProps = {
  linkableAnnouncement?: boolean;
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

const icons = {
  sale: LiaTagsSolid,
  arrowRight: FaArrowRightLong,
};

export default function AnnouncementBar({
  linkableAnnouncement,
}: AnnouncementBarProps) {
  const iconName = "sale"; // This can be dynamically set based on some logic

  const BeforeIcon = icons[iconName];

  return (
    <div className="bg-primary text-white flex items-center px-8 py-3 text-base">
      <div className="hidden w-full items-center gap-2 text-base leading-none lg:flex">
        <div>
          <BeforeIcon className="text-xl" />
        </div>

        {linkableAnnouncement ? (
          <Link
            href="/"
            className="border-b-transparent hover:border-white flex items-center gap-2 border-b py-0.5   transition-all duration-300 ease-in-out"
          >
            {`Announcement text goes here`}{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        ) : (
          <p>{`Announcement text goes here`}</p>
        )}
      </div>

      <ul className="flex shrink-0 items-center gap-4">
        {announcementBarMenu.map((item) => (
          <li key={item.id}>
            <Link className="text-white" href={item.url}>
              {item.label}
            </Link>
          </li>
        ))}

        <li>
          <button
            className="flex items-center gap-2"
            onClick={() => alert("Language Dropdown")}
          >
            <span>
              <BsGlobe2 />
            </span>
            English
          </button>
        </li>
      </ul>
    </div>
  );
}
