import Image from "next/image";
import Link from "next/link";

type DomainImageRowProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  text?: string;
  linkUrl?: string;
};

export default function DomainImageRow({
  alt,
  src,
  text,
  linkUrl,
  ...rest
}: DomainImageRowProps) {
  return (
    <div className="link-block flex flex-col gap-4 text-center">
      <Image src={src} alt={alt || ""} {...rest} />
      {linkUrl ? <Link href={linkUrl || "#"}>{text}</Link> : <p>{text}</p>}
    </div>
  );
}
