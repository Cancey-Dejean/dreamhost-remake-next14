import type { Metadata } from "next";
import "../globals.css";
import { AnnouncementBar, Footer, Header } from "@/components";

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
          <AnnouncementBar linkableAnnouncement />
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
