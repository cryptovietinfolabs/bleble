"use client";
import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Container from "@/components/Container";
import Title from "@/components/Title";

import s from "./style.module.scss";

export default function HomeNftnomics(): React.ReactElement {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      ScrollTrigger.create({
        once: true,
        trigger: textRef.current,
        start: "top bottom",
        end: "bottom bottom",
        onEnter: () => {
          gsap.from(textRef.current, {
            opacity: 0,
            yPercent: 10,
            ease: "power1",
            duration: 1.5,
          });
        },
      })
    }, [textRef])
    return () => {
      gsapContext.revert()
    }
  }, [textRef])

  return (
    <Container>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} className={s.nftnomics}>
        <Flex justifyContent="center" alignItems="center">
          <Box className={s.nftnomics_img}>
            <Image src="/bleble-avatar.png" alt="bleble" fill />
            <Box className={s.nftnomics_circularProgress}>
              <progress value={75} max={100} className={"hidden w-0 h-0"}>
                75%
              </progress>
            </Box>
          </Box>
        </Flex>

        <Stack spacing={6} ref={textRef} justifyContent="center">
          <Title className={s.nftnomics_title} color="brand.yellow.100">
            Nft nomics
          </Title>
          <Stack gap={0}>
            <Title size="md" color="brand.yellow.100">
              Total supply:
            </Title>
            <Title size="md" color="brand.yellow.100">
              100,000,000
            </Title>
          </Stack>
          <Text fontSize="3xl" color="brand.yellow.100">
            No Taxes, No Bullshit. It’s that simple.
          </Text>

          <Text fontSize="3xl" color="brand.yellow.100">
            LP tokens are burnt, and contract ownership is renounced.
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
