import Image from "next/image";
import React from "react";
import { SectionTitle } from "..";

export default function Offering() {
  return (
    <section className="bg-black py-2 text-white lg:py-24">
      <div className="section-grid">
        <div className="col-span-8 col-start-3">
          <SectionTitle className="mb-12 text-3xl font-semibold xl:text-6xl">
            Offering Hosting
            <br />
            Services for Businesses of All Sizes
          </SectionTitle>

          <div className="text-2xl lg:max-w-[370px] xl:max-w-[500px] [&_em]:text-green">
            No matter how small or large your business, DreamHost caters to
            individuals and groups alike for your <em>unique</em> hosting
            scenario.
          </div>
        </div>
        <div className="col-span-9 justify-self-end">
          <Image
            src={"/images/offering_hosting.jpg"}
            width={443}
            height={299}
            alt="Offerings"
            className="rounded-16"
          />
        </div>
      </div>
    </section>
  );
}
