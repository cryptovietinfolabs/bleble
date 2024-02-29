"use client";

import useObHeightChange from "@/hooks/common/useObHeightChange";
import useWindowSize from "@/hooks/common/useWindowSize";
import useLoadManageStore from "@/stores/useLoadManageStore";
import { useIsomorphicLayoutEffect } from "@Hooks/common/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
}

export type tLogoColor =
  | "/"
  | "about"
  | "how-to-buy"
  | "nft-nomics"
  | "roadmap"
  | "contact";
export type tHeaderColor =
  | "/"
  | "about"
  | "how-to-buy"
  | "nft-nomics"
  | "roadmap"
  | "contact";
export type tLayout = number;

interface IUiContext {
  activeSection: string;
  setActiveSection: React.Dispatch<SetStateAction<tLogoColor>>;
  layout: tLayout;
  setLayout: React.Dispatch<SetStateAction<tLayout>>;
}

export const UiContext = createContext<IUiContext>({
  activeSection: "white",
  setActiveSection: (_) => null,
  layout: 0,
  setLayout: (_) => null,
});

function scrollRestoration(): void {
  window.scrollTo(0, 0);
  if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
  }
}

export const UiProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<tLogoColor>("/");
  const [layout, setLayout] = useState<tLayout>(0);
  const { registerLoad, unRegisterLoad } = useLoadManageStore();
  const { scrollHeight } = useObHeightChange();
  const { width, isMobile } = useWindowSize();

  useIsomorphicLayoutEffect(() => {
    const layStore = sessionStorage.getItem("layout") || "0";
    setLayout(Number(layStore) as tLayout);
    registerLoad();
    document.fonts.ready.then(() => {
      unRegisterLoad();
    });
    scrollRestoration();
  }, []);

  useEffect(() => {
    sessionStorage.setItem("layout", layout.toString());
  }, [layout]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [scrollHeight, width, isMobile]);

  const contextValues = useMemo(() => {
    return {
      activeSection,
      setActiveSection,
      layout,
      setLayout,
    };
  }, [activeSection, setActiveSection, layout, setLayout]);

  return (
    <UiContext.Provider value={contextValues}>{children}</UiContext.Provider>
  );
};

export default function useUiContext(): IUiContext {
  return useContext(UiContext);
}
