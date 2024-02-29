import { Box, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import Container from "@/components/Container";
import SvgInsert from "@/components/SvgInsert";
import Title from "@/components/Title";

import s from "./style.module.scss";

export default function HomeHero(): React.ReactElement {
  return (
    <Container>
      <Stack className={s.hero} spacing={4}>
        <HStack
          spacing={6}
          w="full"
          justifyContent="space-between"
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Stack className={s.hero_punchline} spacing={6}>
            <Title color="brand.yellow.100">BLE BLE</Title>
            <Text fontSize="3xl" color="brand.yellow.100">
              the most memeable meme-NFT in existence. The Monkeys have had
              their day, it’s time for Ble Ble to take reign.
            </Text>
            <HStack spacing={6}>
              <IconButton
                isRound
                variant="ghost"
                icon={<SvgInsert src="/icons/x.svg" />}
                aria-label="x"
              />
              <IconButton
                isRound
                variant="ghost"
                icon={<SvgInsert src="/icons/telegram.svg" />}
                aria-label="telegram"
              />
            </HStack>
            <Box className={s.hero_blastBtn_wrapper}>
              <Box className={s.hero_blastBtn}>
                <Image src="/branding/blast.png" alt="blast" fill />
              </Box>
            </Box>
          </Stack>
          <Box className={s.hero_mascot}>
            <Image src="/bleble-face.png" alt="ble ble face" fill />
          </Box>
        </HStack>
      </Stack>
    </Container>
  );
}
