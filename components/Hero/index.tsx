import Image from "next/image";
import { ButtonLink, SectionTitle } from "@/components";

const ctaButtons = [
  {
    size: "large",
    label: "Get Started",
    url: "#",
    variant: "primary-solid",
  },
  {
    size: "small",
    label: "More than a website",
    url: "#",
    variant: "primary-text",
    icon: "/images/play.svg",
  },
];

export default function Hero({ topTitle }: { topTitle?: string }) {
  return (
    <section>
      <div className="section-grid">
        <div className="col-span-9 col-start-3 self-center">
          {/* Text */}
          <div className="flex flex-col">
            <p className="mb-4 text-base font-semibold uppercase text-primary">
              {topTitle || "MEET DREAMHOST"}
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
              {ctaButtons.map(({ size, label, url, variant, icon }) => (
                <ButtonLink
                  key={label}
                  as="a"
                  size={size}
                  label={label}
                  href={url}
                  variant={variant}
                  icon={icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="col-span-6 col-start-[13]">
          <div className="relative h-[586px] w-[600px]">
            <Image src={"/images/hero-girl.png"} fill alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
