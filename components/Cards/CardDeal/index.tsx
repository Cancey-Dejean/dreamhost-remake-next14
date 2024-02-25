import Image from "next/image";
import Link from "next/link";
import { FaWordpress } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function CardDeal() {
  return (
    <div className="link-block bg-offwhite xl:rounded-32 group flex flex-col p-2 text-black transition-transform duration-300 ease-in-out hover:scale-[1.03] lg:p-4">
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
            <Image
              src="/images/arrow-short.svg"
              width={16}
              height={16}
              alt="Arrow Right icon"
            />
          </Link>
        </span>
      </div>
    </div>
  );
}
