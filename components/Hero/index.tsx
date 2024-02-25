import Image from "next/image";
import React from "react";
import { ButtonLink, SectionTitle, Container } from "@/components";

type HeroProps = {};

export default function Hero({}: HeroProps) {
  return (
    <section className="py-0">
      <Container className="mx-auto flex items-center justify-between gap-8">
        {/* Text */}
        <div className="flex flex-col">
          <p className="mb-4 text-base font-semibold text-primary">
            MEET DREAMHOST
          </p>

          <SectionTitle
            as="h1"
            className="mb-8 text-6xl font-bold lg:text-9xl xl:text-10xl"
          >
            Web Hosting <br /> with Purpose
          </SectionTitle>

          <p className="mx-auto max-w-[640px] text-2xl lg:mx-0">
            We make sure your website is fast, secure &amp; always up - so your
            visitors &amp; search engines trust you. Guaranteed.
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

        {/* Image */}
        <Image
          src={"/images/hero-girl.png"}
          className="h-auto w-full max-w-[700px]"
          width={600}
          height={586}
          alt=""
        />
      </Container>
    </section>
  );
}
