import Image from "next/image";
import s from "./style.module.scss";
import { Box, Flex, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import SvgInsert from "@/components/SvgInsert";
import Container from "@/components/Container";
import Title from "@/components/Title";

export default function HomeContact(): React.ReactElement {
  return (
    <Container>
      <Flex justifyContent="center" className={s.contact}>
        <VStack spacing={6} maxW="825px">
          <Title
            className={s.contact_title}
            color="brand.yellow.100"
          >
            Contact
          </Title>
          <Box className={s.contact_logo}>
            <Image src="/bleble.png" alt="logo" fill />
          </Box>
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
          <Text fontSize="3xl" color="brand.yellow.100" textAlign="center">
            Ble Ble NFT has no association with Tork or his creation Ble the
            Blast Frog. This token is simply paying homage to a meme we all love
            and recognize.
          </Text>
          <Text fontSize="3xl" color="brand.yellow.100" textAlign="center">
            Ble Ble is a meme NFT with no intrinsic value or expectation of
            financial return. There is no formal team or roadmap. the coin is
            completely useless and for entertainment purposes only.
          </Text>
        </VStack>
      </Flex>
    </Container>
  );
}
