import Image from "next/image";
import { Pill } from "..";

export default function Hosting() {
  return (
    <section className="bg-black p-0">
      <div className="section-grid p-8">
        <div className="col-end-19 relative z-20 col-span-9">
          <div className="lg:max-w-[408px] xl:max-w-[818px]">
            <Image
              src="/images/offering_hosting2.jpg"
              width={818}
              height={541}
              className="rounded-16"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="section-grid bg-black">
        <div className="col-span-18 col-start-2 rounded-32  bg-offwhite p-16">
          <div className="group relative flex flex-col items-start rounded-32 bg-white p-16 transition-shadow duration-300 hover:shadow-md">
            <Pill variant="primary" />
            <div>
              <Image
                src="/images/wp-hosting.svg"
                width={60}
                height={72}
                alt=""
              />

              <h3 className="mb-2 text-3xl xl:text-4xl">WordPress Hosting</h3>
              <p className="text-base xl:text-lg">
                Get up and running fast with WordPress. Optimized for
                performance and preconfigured for easy maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
