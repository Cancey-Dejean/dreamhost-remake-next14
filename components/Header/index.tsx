"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MainLogo } from "../icons";
import { ButtonLink } from "..";

const mainNav = [
  {
    id: 1,
    name: "WordPress",
    href: "#wordpress",
  },
  {
    id: 2,
    name: "Hosting",
    href: "#hosting",
  },
  {
    id: 3,
    name: "Websites",
    href: "#websites",
  },
  {
    name: "Domains",
    href: "/domains",
  },
  {
    id: 4,
    name: "Email",
    href: "/email",
  },
  {
    id: 5,
    name: "Pro Services",
    href: "#pro-services",
  },
  {
    id: 6,
    name: "blog",
    href: "/blog",
  },
];

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const navLinkStyle =
    "text-black/90 text-lg font-medium capitalize px-5 py-3 bg-transparent hover:bg-gray-300 transition-colors duration-300 ease-in-out rounded-full";

  // Hide header on scroll down
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (!previous) return;

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full bg-white px-8 xl:py-4"
    >
      <div className="flex items-center">
        <Link href="/" className="mr-4">
          <MainLogo />
        </Link>

        <nav className="flex-1">
          <ul className="flex items-center">
            {mainNav.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className={navLinkStyle}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="item-center flex items-center gap-3">
          <ButtonLink
            as="a"
            size="medium"
            label="Login"
            href="#"
            variant="default-ghost"
            className=""
          />

          <ButtonLink as="a" size="medium" label="Get Started" href="#" />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
