import CardIcon from "../Cards/CardIcon";
import ButtonLink from "../atoms/ButtonLink";
import SectionTitle from "../atoms/SectionTitle";

export default function TextCards() {
  return (
    <section>
      <div className="section-grid">
        <div className="col-span-16 col-start-3">
          <div className="grid grid-cols-16 items-center gap-8">
            <div className="col-span-7 col-start-1 flex max-w-[711px] flex-col items-start">
              <SectionTitle
                as="h2"
                className="mb-8 text-3xl md:text-5xl xl:text-6xl"
              >
                Ready to move faster?
              </SectionTitle>

              <p className="text-2xl">
                We make it easy to tap into 20+ years of experience – our web
                experts will tackle whatever you need for a successful site.
              </p>

              <ButtonLink
                as="a"
                size="large"
                className="mt-8"
                label="Learn More"
                icon="/images/arrow-short.svg"
                iconPositionRight
                href="#"
              />
            </div>

            <div className="col-span-8 col-start-9 grid grid-cols-2 gap-8">
              <CardIcon />
              <CardIcon />
              <CardIcon />
              <CardIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
