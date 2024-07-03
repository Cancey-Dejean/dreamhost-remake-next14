import {
  Banner,
  Faq,
  FindDomain,
  FlashSale,
  Hero,
  Hosting,
  HostingPlans,
  LatestDeals,
  Offering,
  Perks,
  TextCards,
  WordressThemes,
} from "@/components";
import Select from "@/components/Select";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      {/* <h1>{t("title")}</h1> */}

      <Hero />
      <LatestDeals />
      <FindDomain />
      <HostingPlans />
      <FlashSale />
      <Offering />
      <WordressThemes />
      <Perks />
      <Banner />
      <TextCards />
      <Faq />
    </>
  );
}
