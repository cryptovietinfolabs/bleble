import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import Container from "@/components/Container";
import Title from "@/components/Title";

import s from "./style.module.scss";

export default function HomeRoadmap(): React.ReactElement {
  return (
    <Container className={s.phase}>
      <VStack spacing={6} className={s.phase_inner}>
        <Title className={s.phase_title} color="brand.yellow.100">
          3 Phases
        </Title>
        <Stack>
          <Text fontSize="3xl" color="brand.yellow.100">
            Phase 1: Release MemeNFT.
          </Text>
          <Text fontSize="3xl" color="brand.yellow.100">
            Phase 2: Own & make Avatar.
          </Text>
          <Text fontSize="3xl" color="brand.yellow.100">
            Phase 3: Ble Ble Takeover.
          </Text>
        </Stack>
      </VStack>

      <Box className={s.phase_noteBg_wrapper}>
        <Box className={s.phase_noteBg}>
          <Image src="/note.png" alt="note" fill />
        </Box>
      </Box>
    </Container>
  );
}
