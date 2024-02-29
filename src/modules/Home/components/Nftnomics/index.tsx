"use client";
import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import s from "./style.module.scss";
import Image from "next/image";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { useRef } from "react";
import { useScrollTrigger } from "@/hooks/common/useScrollTrigger";
import gsap from "gsap";

export default function HomeNftnomics(): React.ReactElement {
  const textRef = useRef<HTMLDivElement>(null);

  useScrollTrigger(
    {
      trigger: textRef,
      start: "top bottom",
      end: "bottom bottom",
      onEnter: () => {
        gsap.from(textRef.current, {
          opacity: 0,
          yPercent: 10,
          ease: "power1.in",
          duration: 1.5,
        });
      },
    },
    [textRef]
  );

  return (
    <Container>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={8} className={s.nftnomics}>
        <Box className={s.nftnomics_img}>
          <Image src="/bleble-face.png" alt="bleble" fill />
        </Box>

        <Stack spacing={6} ref={textRef}>
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
