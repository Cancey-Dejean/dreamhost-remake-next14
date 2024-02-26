import { SectionTitle } from "@/components";
import { SectionTitleProps } from "@/components/atoms/SectionTitle";
import Image from "next/image";

type CardPerkPlanProps = {
  iconImgSrc?: string;
  iconAlt?: string;
  title: string;
  desc?: string;
} & SectionTitleProps;

export default function CardPerkPlan({ as, title, desc }: CardPerkPlanProps) {
  return (
    <div className="flex flex-col items-start">
      <Image
        src="/images/wordpress.svg"
        width={48}
        height={55}
        alt="WordPress Hosting"
        className="mx-0 mb-4 h-[55px] w-auto"
      />

      <SectionTitle as={as || "h4"} className="text-2xl" text={title} />

      <div>{desc}</div>
    </div>
  );
}
