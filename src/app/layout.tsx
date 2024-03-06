import "../styles/app.scss";

import type { Metadata } from "next";
import Head from "next/head";

import { nunito } from "@/constants/fonts";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

import Providers from "./providers";
import Template from "./template";

export const metadata: Metadata = {
  title: "BleBle - The First MemeNFT on Blast",
  description: "The First Pure Meme NFT on Blast.",
  openGraph: {
    images: {
      url: "https://bleble.vip/thumbnail.png",
      alt: "BLEBLE",
    },
    description: "The First Pure Meme NFT on Blast.",
    type: "website",
    locale: "en_IE",
    title: "BLE BLE - The First MemeNFT on Blast",
  },
  twitter: {
    title: "BleBle - The First MemeNFT on Blast",
    description: "The First Pure Meme NFT on Blast.",
    site: "@site",
    creator: "@bleble_blast",
    card: "summary_large_image",
    images: {
      url: "https://bleble.vip/thumbnail.png",
      alt: "BLEBLE",
    },
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
