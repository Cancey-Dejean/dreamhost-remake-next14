import Image from "next/image";
import { CardHosting } from "@/components";

export default function Hosting() {
  return (
    <section className="bg-black p-0">
      <div className="section-grid p-8">
        <div className="relative z-20 col-span-9 col-end-19">
          <div className="lg:max-w-[408px] xl:max-w-[818px]">
            <Image
              src="/images/offering_hosting2.jpg"
              width={818}
              height={541}
              className="rounded-16"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="section-grid">
        <div className="col-span-18 col-start-2 rounded-32 bg-offwhite p-16">
          <div className="lg:grid-cols-3 grid gap-8">
            <ul className="col-span-2 grid grid-cols-2 gap-8">
              <CardHosting
                linkableUrl="/"
                linkableText="Starting at: $2.59/mo"
                cardBodyDescription="Fast web servers to run your applications with root access and a 100% Uptime Guarantee."
              />
              <CardHosting
                linkableUrl="/"
                linkableText="Starting at: $2.59/mo"
                cardBodyDescription="Fast web servers to run your applications with root access and a 100% Uptime Guarantee."
              />
              <CardHosting
                linkableUrl="/"
                linkableText="Starting at: $169.00/mo"
                cardBodyDescription="Fast web servers to run your applications with root access and a 100% Uptime Guarantee."
              />
              <CardHosting
                linkableUrl="/"
                linkableText="Starting at: $0.0075/hour"
                cardBodyDescription="Fast web servers to run your applications with root access and a 100% Uptime Guarantee."
              />
            </ul>

            <div className="relative grid items-stretch lg:col-span-1">
              <CardHosting
                linkableUrl="/"
                cardHeadTitle="Managed Virtual Private Servers"
                cardHeadDescription="Expect More From Your Website or App."
                linkableText="Starting at: $10.00/mo"
                cardBodyDescription="Fast web servers to run your applications with root access and a 100% Uptime Guarantee."
              />
            </div>
          </div>

          <div className="mt-8">
            <CardHosting
              linkableUrl="/"
              direction="horizontal"
              cardHeadTitle="Managed Virtual Private Servers"
              cardHeadDescription="Expect More From Your Website or App."
              linkableText="Starting at: $10.00/mo"
              cardBodyDescription="Fast web servers to run your applications with root access and a 100% Uptime Guarantee."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
