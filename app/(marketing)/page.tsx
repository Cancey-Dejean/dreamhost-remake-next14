import { FindDomain, Hero, HostingPlans, LatestDeals } from "@/components";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestDeals />
      <FindDomain />
      <HostingPlans />
    </>
  );
}
