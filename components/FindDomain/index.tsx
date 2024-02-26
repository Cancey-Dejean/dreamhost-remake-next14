import { AnimatedLabelInput, SectionTitle } from "@/components";

export default function FindDomain() {
  return (
    <section className="text-white">
      <div className="section-grid">
        <div className="bg-darkPurple rounded-32 grid-cols-16 col-span-full col-start-2 ml-8 grid px-8 py-20 ">
          <div className="col-span-9 col-start-1 pl-8">
            <div className="rounded-16 flex items-stretch overflow-hidden">
              <div className="input-container flex-1">
                <AnimatedLabelInput label="Find your perfect domain name..." />
              </div>
              <button className="bg-primary px-8 py-[14]">Submit</button>
            </div>

            <div>images</div>
          </div>

          <div className="col-span-4 col-start-10 pl-16 pr-8">
            <SectionTitle as="h3" className="text-8xl">
              Find Your Perfect <br /> Domain Name
            </SectionTitle>
          </div>
        </div>
      </div>
    </section>
  );
}
