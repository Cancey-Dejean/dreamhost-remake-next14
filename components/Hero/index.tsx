import Image from "next/image";
import React from "react";
import { ButtonLink } from "..";

type HeroProps = {};

export default function Hero({}: HeroProps) {
  return (
    <section className="items-center lg:px-4">
      <div className="flex items-center justify-between">
        {/* Text */}
        <div className="">
          <p className=""> MEET DREAMHOST</p>
          <div className="max-w-[490px]">
            <h1 className="xl:text-10xl mb-4 text-balance text-6xl font-bold lg:text-9xl">
              Web Hosting with Purpose
            </h1>
          </div>

          <p className="mx-auto mb-0 max-w-[640px] text-2xl lg:mx-0">
            We make sure your website is fast, secure &amp; always up - so your
            visitors &amp; search engines trust you. Guaranteed.
          </p>
          <div className="item-center g mt-8 flex items-center">
            <ButtonLink as="a" size="medium" label="Get Started" href="#" />
            <ButtonLink
              as="a"
              size="medium"
              label="Login"
              href="#"
              variant="default-ghost"
              className=""
            />
          </div>
        </div>

        {/* Image */}
        <div className="">
          <div className={"image-wrapper"}>
            <Image
              src={"/images/hero.png"}
              className="!relative !h-[unset] !w-full object-contain"
              fill={true}
              alt="ALT_TEXT"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
