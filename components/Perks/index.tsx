import Image from "next/image";
import React from "react";
import SectionTitle from "../atoms/SectionTitle";
import CardPerk from "../Cards/CardPerk";

export default function Perks() {
  return (
    <section>
      <div className="section-grid">
        <div className="flex max-w-[605px] flex-col justify-center md:col-span-4 md:col-start-1 lg:col-span-8 lg:col-start-2 xl:col-span-8 xl:col-start-3">
          <SectionTitle as="h2" className="text-11xl">
            What Makes DreamHost So Different
          </SectionTitle>
          <p>
            With over 20 years of hosting experience, we focus on successful
            sites for web designers, developers, bloggers and online businesses.
            Our community and support helps you create a website fast and easy!
          </p>
        </div>

        <div className="mx-auto mb-2 flex flex-row items-end gap-8 md:col-span-4 md:col-start-5 lg:col-span-7 lg:col-start-11 xl:col-span-8 xl:col-start-11">
          <Image
            src="/images/makes_dh.jpg"
            alt=""
            className="rounded-16"
            width={345}
            height={345}
          />
          <Image
            src="/images/makes_dh_2.jpg"
            alt=""
            className="rounded-16"
            width={444}
            height={444}
          />
        </div>

        <div className="lg:col-span-16 lg:col-start-2 xl:col-start-3">
          <div className="grid grid-cols-3 gap-8">
            <CardPerk />
            <CardPerk />
            <CardPerk />
            <CardPerk />
            <CardPerk />
            <CardPerk />
          </div>
        </div>
      </div>
    </section>
  );
}
