import Pill, { PillProps } from "@/components/atoms/Pill";
import { cn } from "@/libs/utils";
import Link from "next/link";

type CardSaleProps = {
  linkable?: boolean;
} & PillProps;

export default function CardSale({ linkable, variant }: CardSaleProps) {
  return (
    <div className="link-block group flex flex-col items-center justify-center rounded-32 bg-white py-12 text-center text-black transition-transform duration-300 ease-in-out hover:scale-[1.03]">
      <Pill variant={variant} />

      <div className="mb-4 mt-8">
        <p className="text-base">Up to</p>
        <p
          className={cn(
            "mb-4 text-8xl font-bold",
            variant === "primary" && "text-primary",
            variant === "green" && "text-green",
          )}
        >
          67% Off
        </p>

        <div className="text-3xl font-bold">
          {linkable ? (
            <Link href="/" className="group-hover:underline">
              Hosting
            </Link>
          ) : (
            <p>Hosting</p>
          )}
        </div>
      </div>
    </div>
  );
}
