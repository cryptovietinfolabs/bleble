"use client";

import { Button, HStack, Text } from "@chakra-ui/react";

import { INavItem } from "@/constants/navList";
import { useScroll } from "@/contexts/ScrollProvider";
import useUiContext from "@/contexts/UiProvider";

import s from "../../style.module.scss";

interface IDesktopNav {
  navList: INavItem[];
}

export default function DesktopNav({
  navList,
}: IDesktopNav): React.ReactElement {
  const { scrollTo } = useScroll();
  const { activeSection } = useUiContext();

  return (
    <HStack gap={6}>
      {navList.map((navItem) => {
        return (
          <Button
            variant="ghost"
            key={navItem.name}
            className={`${s.header_link} ${
              activeSection === navItem.link && s.active
            }`}
            onClick={() => scrollTo(navItem.link)}
          >
            <Text fontSize="md" fontWeight="bold">
              {navItem.name}
            </Text>
          </Button>
        );
      })}
    </HStack>
  );
}
