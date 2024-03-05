"use client";

import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Container from "@Components/Container";
import Image from "next/image";
import { useState } from "react";

import { navList } from "@/constants/navList";
import useWindowSize from "@/hooks/common/useWindowSize";

import DesktopNav from "./components/DesktopNav";
import DrawerNav from "./components/DrawerNav";
import s from "./style.module.scss";
import { evening } from "@/constants/fonts";

export default function Header(): React.ReactElement {
  const { isDesktop } = useWindowSize();
  const [isOpenNav, setIsOpenNav] = useState(false);

  return (
    <Box as="header" className={`${s.header}`}>
      <Container>
        <HStack justifyContent="space-between">
          <Button
            bg="transparent"
            _hover={{ bg: "transparent" }}
            as="a"
            href="/"
          >
            <Box className={s.header_logo}>
              <Image src="/bleble-face.png" alt="logo" fill />
            </Box>
          </Button>

          <HStack>
            {!isDesktop ? (
              <>
                <div
                  className={`${s.hamburger} ${isOpenNav ? s.open : ""}`}
                  onClick={() => setIsOpenNav(!isOpenNav)}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <DrawerNav isOpen={isOpenNav} onOpenNav={setIsOpenNav} />
              </>
            ) : (
              <DesktopNav navList={navList} />
            )}
            <Button>
              <Text
                fontSize="md"
                fontWeight="bold"
                className={evening.className}
                as="a"
                href="https://airdrop.bleble.vip/"
              >
                Airdrop
              </Text>
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
