"use client";
import { Stack } from "@chakra-ui/react";

import HomeHero from "./components/Hero";
import HomeAbout from "./components/About";
import s from "./style.module.scss";
import HomeHowToBuy from "./components/HowToBuy";
import HomeNftnomics from "./components/Nftnomics";
import HomeRoadmap from "./components/Roadmap";
import HomeContact from "./components/Contact";
import SectionIndicatorWrapper from "@/components/SectionIndicatorWrapper";
import { useEffect, useRef } from "react";
import { useScroll } from "@/contexts/ScrollProvider";

export default function HomePage(): React.ReactElement {
  const { scrollRefs } = useScroll();
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const howToBuyRef = useRef<HTMLDivElement>(null);
  const nftnomicsRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRefs["/"] = homeRef;
    scrollRefs.about = aboutRef;
    scrollRefs["how-to-buy"] = howToBuyRef;
    scrollRefs["nft-nomics"] = nftnomicsRef;
    scrollRefs.roadmap = roadmapRef;
    scrollRefs.contact = contactRef;
  }, [
    homeRef,
    aboutRef,
    howToBuyRef,
    nftnomicsRef,
    roadmapRef,
    contactRef,
    scrollRefs,
  ]);

  return (
    <Stack spacing={0} className={s.homePage}>
      <SectionIndicatorWrapper section="/">
        <div ref={homeRef}>
          <HomeHero />
        </div>
      </SectionIndicatorWrapper>
      <SectionIndicatorWrapper section="about">
        <div ref={aboutRef}>
          <HomeAbout />
        </div>
      </SectionIndicatorWrapper>
      <SectionIndicatorWrapper section="how-to-buy">
        <div ref={howToBuyRef}>
          <HomeHowToBuy />
        </div>
      </SectionIndicatorWrapper>
      <SectionIndicatorWrapper section="nft-nomics">
        <div ref={nftnomicsRef}>
          <HomeNftnomics />
        </div>
      </SectionIndicatorWrapper>
      <SectionIndicatorWrapper section="roadmap">
        <div ref={roadmapRef}>
          <HomeRoadmap />
        </div>
      </SectionIndicatorWrapper>
      <SectionIndicatorWrapper section="contact">
        <div ref={contactRef}>
          <HomeContact />
        </div>
      </SectionIndicatorWrapper>
    </Stack>
  );
}
