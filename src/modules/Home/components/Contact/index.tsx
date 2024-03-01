import { Box, Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import Container from "@/components/Container";
import SvgInsert from "@/components/SvgInsert";
import Title from "@/components/Title";

import s from "./style.module.scss";

export default function HomeContact(): React.ReactElement {
  return (
    <Container>
      <Flex justifyContent="center" className={s.contact}>
        <VStack spacing={6} maxW="625px">
          <Title className={s.contact_title} color="brand.yellow.100">
            Contact
          </Title>
          <Box className={s.contact_logo}>
            <Image src="/bleble-face.png" alt="logo" fill />
          </Box>
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
          <Text fontSize="3xl" color="brand.yellow.100" textAlign="center">
            Ble Ble NFT has no organization, no leader, no roadmap - so Ble Ble
            has no intrinsic value. Ble Ble is simply yours, for you and for
            strong Blast community.
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
}
