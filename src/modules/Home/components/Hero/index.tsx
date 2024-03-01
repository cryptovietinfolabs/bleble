import { Box, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import Container from "@/components/Container";
import SvgInsert from "@/components/SvgInsert";
import useWindowSize from "@/hooks/common/useWindowSize";

import s from "./style.module.scss";

export default function HomeHero(): React.ReactElement {
  const { isDesktop } = useWindowSize();

  return (
    <Container>
      <Stack className={s.hero} spacing={4}>
        <HStack
          spacing={6}
          w="full"
          justifyContent="space-between"
          flexDirection={{ base: "column-reverse", md: "row" }}
        >
          <Stack
            className={s.hero_punchline}
            spacing={6}
            alignItems={{ base: "center", md: "flex-start" }}
          >
            {/* <Title color="brand.yellow.100">BLE BLE</Title> */}
            <Box className={s.hero_title}>
              <Image src={"/bleble.png"} alt="blble logo" fill />
            </Box>
            <Text fontSize="3xl" color="brand.yellow.100">
              The First Pure MemeNFT in the Crypto Space (ERC-721, ERC-1155 &
              ERC-404). The Blast L2 begins, it’s time for Ble Ble to take
              reign.
            </Text>
            <HStack spacing={6}>
              <IconButton
                isRound
                variant="ghost"
                icon={<SvgInsert src="/icons/x.svg" />}
                aria-label="x-twitter"
                as="a"
                href="https://twitter.com/bleble_blast"
                target="_blank"
              />
              <IconButton
                isRound
                variant="ghost"
                icon={<SvgInsert src="/icons/telegram.svg" />}
                aria-label="telegram"
              />
            </HStack>
            {/* <Box className={s.hero_blastBtn_wrapper}>
              <Box className={s.hero_blastBtn}>
                <Image src="/branding/blast.png" alt="blast" fill />
              </Box>
            </Box> */}
          </Stack>
          <Box className={s.hero_mascot}>
            {!isDesktop ? (
              <Image src="/bleble-group-mobile.png" alt="ble ble group" fill />
            ) : (
              <Image src="/bleble-group.png" alt="ble ble face" fill />
            )}
          </Box>
        </HStack>
      </Stack>
    </Container>
  );
}
