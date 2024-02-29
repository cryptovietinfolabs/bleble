import localFont from "next/font/local";
import { Nunito } from "next/font/google";

export const evening = localFont({ src: "../../public/fonts/Evening-BF65d60a0463c49.otf" });

export const nunito = Nunito({
  weight: ["600"],
  subsets: ["latin"],
  display: "swap",
});
