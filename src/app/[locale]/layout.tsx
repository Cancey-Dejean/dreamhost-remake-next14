import type { Metadata } from "next";
import { Header, Footer } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  title: "DreamHost - Web Hosting, Domain Names, WordPress & More",
  description:
    "DreamHost offers domain names, web hosting, managed WordPress hosting, business email, and much more. 100% uptime guarantee, 24/7 support. Sign up today!",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <main>
            <div>
              <Header logo="/images/logo.svg" />
              {children}
              <Footer />
            </div>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
