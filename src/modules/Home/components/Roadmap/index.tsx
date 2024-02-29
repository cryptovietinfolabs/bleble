import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

import Container from "@/components/Container";
import Title from "@/components/Title";

import s from "./style.module.scss";

export default function HomeRoadmap(): React.ReactElement {
  return (
    <Container className={s.roadmap}>
      <VStack spacing={6} className={s.roadmap_inner}>
        <Title className={s.roadmap_title} color="brand.yellow.100">
          Roadmap
        </Title>
        <Stack>
          <Text fontSize="3xl" color="brand.yellow.100">
            Phase 1: Meme
          </Text>
          <Text fontSize="3xl" color="brand.yellow.100">
            Phase 2: Vibe and HODL
          </Text>
          <Text fontSize="3xl" color="brand.yellow.100">
            Phase 3: Meme Takeover
          </Text>
        </Stack>
      </VStack>

      <Box className={s.roadmap_noteBg_wrapper}>
        <Box className={s.roadmap_noteBg}>
          <Image src="/note.png" alt="note" fill />
        </Box>
      </Box>
    </Container>
  );
}