import { ButtonLink, CardPerkPlan, SectionTitle } from "@/components";

const perkPlans = [
  {
    iconImgSrc: "/images/wordpress.svg",
    iconAlt: "WordPress Hosting",
    title: "Super Easy to Use",
    desc: " Our custom control panel is simple to use and removes the headache of managing your web hosting.",
  },
  {
    iconImgSrc: "/images/wordpress.svg",
    iconAlt: "WordPress Hosting",
    title: "Super Easy to Use",
    desc: " Our custom control panel is simple to use and removes the headache of managing your web hosting.",
  },
  {
    iconImgSrc: "/images/wordpress.svg",
    iconAlt: "WordPress Hosting",
    title: "Super Easy to Use",
    desc: " Our custom control panel is simple to use and removes the headache of managing your web hosting.",
  },
  {
    iconImgSrc: "/images/wordpress.svg",
    iconAlt: "WordPress Hosting",
    title: "Super Easy to Use",
    desc: " Our custom control panel is simple to use and removes the headache of managing your web hosting.",
  },
];

export default function HostingPlans() {
  return (
    <section>
      <div className="section-grid">
        <div className="rounded-32 bg-white py-16 shadow-lg xl:col-span-16 xl:col-start-3">
          <div className="grid grid-cols-16 items-center gap-8">
            <div className="col-span-5 col-start-2 flex flex-col items-start">
              <SectionTitle className="mb-4 text-4xl lg:text-6xl xl:text-8xl">
                DreamHost Helps <br /> You Succeed
              </SectionTitle>

              <p>
                Grow your website faster by using DreamHost as your foundation.
              </p>
              <ButtonLink
                as="a"
                href="/"
                size="medium"
                label="See Our Hosting Plans"
                className="mt-8"
              />
            </div>

            <div className="grid-cols-2 col-span-8 col-start-8 grid gap-8">
              {perkPlans.map((item, index) => (
                <CardPerkPlan
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  iconImgSrc={item.iconImgSrc}
                  iconAlt={item.iconAlt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
