import Image from "next/image";
import React from "react";
import { ButtonLink, SectionTitle } from "@/components";

type HeroProps = {};

export default function Hero({}: HeroProps) {
  return (
    <section className="">
      <div className="section-grid">
        <div className="col-span-9 col-start-3 self-center">
          {/* Text */}
          <div className="flex flex-col">
            <p className="mb-4 text-base font-semibold text-primary">
              MEET DREAMHOST
            </p>

            <SectionTitle
              as="h1"
              className="mb-8 text-5xl font-bold lg:text-7xl xl:text-8xl"
            >
              Web Hosting <br /> with Purpose
            </SectionTitle>

            <p className="mx-auto max-w-[640px] text-2xl lg:mx-0">
              We make sure your website is fast, secure &amp; always up - so
              your visitors &amp; search engines trust you. Guaranteed.
            </p>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-4">
              <ButtonLink as="a" size="large" label="Get Started" href="#" />
              <ButtonLink
                as="a"
                size="small"
                label="More than a website"
                href="#"
                variant="primary-text"
                icon="/images/play.svg"
                className="link-underline"
              />
            </div>
          </div>
        </div>

        <div className="col-span-6 col-start-[13]">
          {/* Image */}
          <Image
            src={"/images/hero-girl.png"}
            className="h-auto w-full max-w-[760px] object-contain"
            width={600}
            height={586}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
