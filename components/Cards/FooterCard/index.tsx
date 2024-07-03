import { cn } from "@/libs/utils";
import Link from "next/link";
import { FaRegComments, FaMailBulk } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";

const colors = {
  primary: "text-primary",
  secondary: "",
  tertiary: "",
};

export default function FooterCard({
  colorTheme = "primary",
}: {
  colorTheme: "primary" | "secondary" | "tertiary";
}) {
  return (
    <div className="flex flex-col  rounded-16 bg-[#111] p-12">
      <FaRegComments className={cn("mb-8 size-14", colors[colorTheme])} />
      <h3 className="mb-4 text-2xl font-bold">DreamHost Sales Help</h3>
      <p className="mb-8 line-clamp-2 ">24/7/365 Through the Chat Widget</p>
      <Link href="#" className="mt-auto flex items-center gap-2 font-semibold ">
        Chat Now <FaArrowRightLong />
      </Link>
    </div>
  );
}
