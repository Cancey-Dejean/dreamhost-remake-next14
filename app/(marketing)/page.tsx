import {
  FindDomain,
  FlashSale,
  Hero,
  Hosting,
  HostingPlans,
  LatestDeals,
  Offering,
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
    </>
  );
}
