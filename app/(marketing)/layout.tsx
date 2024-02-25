import type { Metadata } from "next";
import { AnnouncementBar, Footer, Header } from "@/components";
import "../globals.css";

export const metadata: Metadata = {
  title: "DreamHost - Web Hosting, Domain Names, WordPress & More",
  description:
    "DreamHost offers domain names, web hosting, managed WordPress hosting, business email, and much more. 100% uptime guarantee, 24/7 support. Sign up today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <div>
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
