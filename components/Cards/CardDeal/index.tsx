import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function CardDeal() {
  return (
    <div className="link-block group flex flex-col bg-offwhite p-2 text-black transition-transform duration-300 ease-in-out hover:scale-[1.03] lg:p-4 xl:rounded-32">
      <div className="mb-4">
        <Image
          src="/images/wordpress.svg"
          width={48}
          height={55}
          alt="WordPress Hosting"
          className="h-[55px]"
        />
      </div>
      <div className="hover:underline [&_span]:block">
        <span>WordPress Hosting</span>
        <span className="!flex items-center gap-2 leading-10">
          Starting @ $2.59/mo
          <Link href="/">
            <FaArrowRight className="text-base" />
          </Link>
        </span>
      </div>
    </div>
  );
}
