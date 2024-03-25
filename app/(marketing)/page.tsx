import {
  Banner,
  FindDomain,
  FlashSale,
  Hero,
  Hosting,
  HostingPlans,
  LatestDeals,
  Offering,
  Perks,
  WordressThemes,
} from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestDeals />
      <FindDomain />
      <HostingPlans />
      <FlashSale />
      <Offering />
      <Hosting />
      <WordressThemes />
      <Perks />
      <Banner />
    </>
  );
}
