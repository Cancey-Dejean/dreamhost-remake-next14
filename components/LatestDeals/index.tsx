import { CardDeal, SectionTitle } from "@/components";

export default function LatestDeals() {
  return (
    <section className="">
      <div className="section-grid">
        <div className="col-span-16 col-start-3">
          <SectionTitle
            as="h2"
            className="mb-4 text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl"
          >
            The Latest Deals from DreamHost. Save now!
          </SectionTitle>

          <ul className="mx-auto flex items-stretch gap-8">
            <li className="flex-1">
              <CardDeal />
            </li>
            <li className="flex-1">
              <CardDeal />
            </li>
            <li className="flex-1">
              <CardDeal />
            </li>
            <li className="flex-1">
              <CardDeal />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
