import Link from "next/link";
import FooterCard from "../Cards/FooterCard";
import SectionTitle from "../atoms/SectionTitle";
import {
  Facebook,
  Instagram,
  MainLogoFooter,
  NewDreamLogo,
  XTwitter,
  Youtube,
} from "../icons";
import {
  companyMenu,
  legalMenu,
  loginMenu,
  productsMenu,
  resourcesMenu,
} from "@/constants";

export default function Footer() {
  return (
    <footer className="mt-auto bg-black text-white">
      <div className="section-grid py-24">
        <div className="col-span-8 col-start-3">
          <SectionTitle as="h2" className="mb-8 text-4xl">
            Need Some Help?
          </SectionTitle>

          <p>
            Whether you're stuck or just want some tips on where to start, hit
            up our experts anytime. We're here to help!
          </p>
        </div>

        <div className="col-span-16 col-start-3">
          <div className="grid grid-cols-3 gap-8">
            <FooterCard />
            <FooterCard />
            <FooterCard />
          </div>
        </div>
      </div>

      <div className="section-grid py-24">
        <div className="col-span-2 col-start-3">
          <div className="mb-8">
            <MainLogoFooter />
          </div>

          <div className="mb-8">
            <p className="mb-1 text-base font-medium">Connect with us</p>

            <div className="flex items-center gap-5">
              <Link href="#">
                <XTwitter />
              </Link>
              <Link href="#">
                <Youtube />
              </Link>
              <Link href="#">
                <Facebook />
              </Link>
              <Link href="#">
                <Instagram />
              </Link>
            </div>
          </div>

          <p className="text-base font-medium">
            Copyright &copy; {new Date().getFullYear()}
            <span className="block">DreamHost, LLC</span>
          </p>

          <div className="mt-8">
            <NewDreamLogo />
          </div>
        </div>

        <div className="col-span-3 col-start-6">
          <FooterColumn title="PRODUCTS" links={productsMenu} />
        </div>

        <div className="col-span-3 col-start-9">
          <FooterColumn title="COMPANY" links={companyMenu} />
        </div>

        <div className="col-span-3 col-start-12">
          <FooterColumn title="LEGAL" links={legalMenu} />
        </div>

        <div className="col-start-15 col-span-3">
          <FooterColumn title="RESOURCES" links={resourcesMenu} />
        </div>

        <div className="col-start-18 col-span-3">
          <FooterColumn title="LOGIN" links={loginMenu} />
        </div>
      </div>
    </footer>
  );
}

type FooterLink = {
  label: string;
  url: string;
}[];

type FooterColumnProps = {
  title: string;
  links: FooterLink;
};

const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div>
      <h4 className="mb-8 text-2xl font-bold uppercase">{title}</h4>
      <ul className="flex flex-col gap-4">
        {links.map(({ label, url }) => (
          <li key={label}>
            <Link href={url} className="text-base">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
