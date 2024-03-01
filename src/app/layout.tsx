import "../styles/app.scss";

import type { Metadata } from "next";
import Head from "next/head";

import { nunito } from "@/constants/fonts";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

import Providers from "./providers";
import Template from "./template";

export const metadata: Metadata = {
  title: "BleBle",
  description: "The First Pure Meme NFT on Blast.",
  openGraph: {
    images: "/bleble-face.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
      </Head>
      <body className={` ${nunito.className}`}>
        <Providers>
          <Header />
          <Template>{children}</Template>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
