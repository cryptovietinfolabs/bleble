"use client";
import {
  Box,
  Flex,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
      });
    }, [textRef]);
    return () => {
      gsapContext.revert();
    };
  }, [textRef]);

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
            NFT Nomics
          </Title>
          <Stack gap={0}>
            <Title size="md" color="brand.yellow.100">
              NFT Supply: 420,690,000,000
            </Title>
          </Stack>
          <UnorderedList>
            <ListItem>
              <Text fontSize="2xl" color="brand.yellow.100">
                Standard: ERC-1155
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="2xl" color="brand.yellow.100">
                2% Airdrop (NFT holders, Staked ETH on Blast, $PePe Holders …)
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="2xl" color="brand.yellow.100">
                40% Sale to the community
              </Text>
            </ListItem>
            <ListItem>
              <Text fontSize="2xl" color="brand.yellow.100">
                49% to Add LP (NFT/ETH pair)
              </Text>
            </ListItem>
          </UnorderedList>

          <Text fontSize="2xl" color="brand.yellow.100">
            LP Are Burnt, contract Ownership is Renounced.
          </Text>
          <Text fontSize="2xl" color="brand.yellow.100">
            Royalty 5% (2.5% buy back and burn, 2.5% bleble treasury)
          </Text>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
