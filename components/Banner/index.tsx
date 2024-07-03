import Image from "next/image";
import SectionTitle from "../atoms/SectionTitle";
import { footerLogoDefault } from "@/constants";

export default function Banner() {
  return (
    <section className="pt-32">
      <div className="section-grid h-full">
        <div className="relative col-span-18 col-start-2">
          <div className="relative h-[784px] w-full overflow-hidden rounded-64 after:absolute after:inset-0 after:bg-[rgba(0,0,0,0.4)] after:content-['']">
            <Image
              src="/images/hire_a_pro_d.jpg"
              fill
              alt=""
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 flex h-full flex-col text-white">
            <div className="flex items-center p-24">
              <Image
                width={256}
                height={36}
                className=""
                src={footerLogoDefault}
                alt=""
              />
              <span className="text-base leading-none md:text-4xl">
                Pro Services
              </span>
            </div>
            <div className="mt-auto p-24">
              <SectionTitle
                as="h2"
                className="text-3xl md:text-5xl xl:text-9xl"
              >
                Hire a Pro, We'll Do
                <br />
                the Work for You
              </SectionTitle>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
