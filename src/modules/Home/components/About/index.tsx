"use client";

import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

import Container from "@/components/Container";
import Title from "@/components/Title";
import { useScrollTrigger } from "@/hooks/common/useScrollTrigger";

import s from "./style.module.scss";

export default function HomeAbout(): React.ReactElement {
  const bgRef = useRef<HTMLDivElement>(null);

  useScrollTrigger(
    {
      trigger: bgRef,
      start: "top center",
      end: "bottom bottom",
      onEnter: () => {
        gsap.to(bgRef.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "power4.out",
        });
      },
    },
    [bgRef],
  );

  return (
    <Box className={s.about}>
      <Container className={s.about_inner}>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <Box className={s.about_mascot}>
            <Image src="/bleble-body.png" alt="ble ble face" fill />
          </Box>
          <Stack spacing={4}>
            <Title color="brand.yellow.100">About</Title>
            <Text fontSize="3xl" color="brand.yellow.100">
              Ble Ble is a funny meme nft for the people, forever (LP burnt and
              contract renounced).
            </Text>

            <Text fontSize="3xl" color="brand.yellow.100">
              Ble Ble is here to make the Blast community great. Fueled by pure
              memetic power, let Ble Ble show you the way to Blast.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box className={s.about_bg} ref={bgRef} />
    </Box>
  );
}
