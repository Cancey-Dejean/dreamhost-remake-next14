"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import ButtonLink from "@/components/atoms/ButtonLink";
import Image from "next/image";
import { AnnouncementBar } from "@/components";
import { mainNav } from "@/constants";

const Header = ({ logo, logoAlt }: { logo?: string; logoAlt?: string }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const navLinkStyle =
    "text-black/90 text-xl font-medium capitalize px-5 py-3 bg-transparent hover:bg-gray-300 transition-colors duration-300 ease-in-out rounded-16";

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
    <>
      <AnnouncementBar
        announcementText="Hosting Flash Sale: Starting at $2.59/mo for a limited time"
        announcementIcon="sale"
        url="/"
      />
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
            <div className="relative h-[36px] w-[194px]">
              <Image
                fill
                src={logo || "/logo.svg"}
                alt={logoAlt || "Lia Logo"}
                className="h-auto w-full max-w-[194px]"
                priority
              />
            </div>
          </Link>

          <nav className="flex-1">
            <ul className="flex items-center">
              {mainNav.map(({ url, label }, i) => (
                <li key={i}>
                  <Link href={url} className={navLinkStyle}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="item-center flex items-center gap-1">
            <Link href="#" className={navLinkStyle}>
              Login
            </Link>

            <ButtonLink size="medium" as="a" label="Get Started" href="#" />
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
