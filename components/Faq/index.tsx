import SectionTitle from "../atoms/SectionTitle";
import FaqItem from "./FaqItem";

export default function Faq() {
  return (
    <section>
      <div className="section-grid">
        <div className="col-span-16 col-start-3">
          <div className="grid grid-cols-16 gap-8">
            <div className="col-span-6 col-start-1 flex max-w-[711px] flex-col items-start">
              <SectionTitle as="h2" className="text-5xl">
                Frequently Asked Questions
              </SectionTitle>
            </div>

            <div className="col-span-9 col-start-7">
              <FaqItem />
              <FaqItem />
              <FaqItem />
              <FaqItem />
              <FaqItem />
              <FaqItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
