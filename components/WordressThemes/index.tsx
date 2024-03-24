import Link from "next/link";
import { ButtonLink, SectionTitle } from "..";
import Image from "next/image";

export default function WordressThemes() {
  return (
    <section className="py-24">
      <div className="section-grid">
        <div className="col-span-full lg:col-span-16 lg:col-start-2 xl:col-start-3">
          <div className="flex max-w-[805px] flex-col items-start">
            <SectionTitle
              as="h3"
              className="mb-8 text-4xl lg:text-8xl xl:text-11xl"
            >
              Beautiful WordPress Themes
            </SectionTitle>

            <p className="mb-8 text-2xl">
              Hundreds of professional, responsive designs for your WordPress
              website. Elegant, sleek and easy to use.
            </p>

            <ButtonLink
              as="a"
              variant="primary-solid"
              label="See All Website Templates"
              size="medium"
            />

            {/* <Link
              className="bg-blue hover:bg-blue-400 active:bg-blue-600 focus:ring-blue rounded inline-block px-2 py-[14px] text-lg font-semibold !leading-none text-white hover:!no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg:px-4 lg:py-3 lg:text-3xl"
              href="#"
            >
              See All Website Templates
            </Link> */}
          </div>
        </div>

        <div className="col-span-full lg:col-span-16 lg:col-start-2 xl:col-start-3">
          <ul className="grid gap-8 lg:grid-cols-3">
            <li className="group transition-transform duration-300 ease-in-out hover:scale-105">
              <button className="overflow-hidden rounded-16">
                <Image
                  src="/images/wp_theme1.jpg"
                  alt=""
                  width={633}
                  height={424}
                  className="transition-transform duration-300 group-hover:scale-[1.1]"
                />
              </button>
            </li>
            <li className="group transition-transform duration-300 ease-in-out hover:scale-105">
              <button className="overflow-hidden rounded-16">
                <Image
                  src="/images/wp_theme1.jpg"
                  alt=""
                  width={633}
                  height={424}
                  className="transition-transform duration-300 group-hover:scale-[1.1]"
                />
              </button>
            </li>
            <li className="group transition-transform duration-300 ease-in-out hover:scale-105">
              <button className="overflow-hidden rounded-16">
                <Image
                  src="/images/wp_theme1.jpg"
                  alt=""
                  width={633}
                  height={424}
                  className="transition-transform duration-300 group-hover:scale-[1.1]"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
