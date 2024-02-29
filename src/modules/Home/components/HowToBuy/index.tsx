"use client";

import { Box, Card, CardBody, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRef } from "react";

import Container from "@/components/Container";
import Title from "@/components/Title";
import { evening } from "@/constants/fonts";
import { howToBuySteps } from "@/constants/howToBuySteps";

import s from "./style.module.scss";

export default function HomeHowToBuy(): React.ReactElement {
  const stepsRef = useRef<HTMLDivElement[]>([]);

  return (
    <Container>
      <Stack className={s.htb}>
        <Title className={s.htb_title} color="brand.yellow.100">
          How to buy
        </Title>
        <Stack className={s.htb_steps} spacing={6}>
          {howToBuySteps.map((step) => (
            <Card
              key={step.title}
              ref={(el) => stepsRef.current.push(el as HTMLDivElement)}
            >
              <CardBody>
                <HStack
                  spacing={8}
                  flexDirection={{ base: "column", md: "row" }}
                >
                  <Box className={s.htb_step_img}>
                    <Image src={step.image} alt={step.title} fill />
                  </Box>
                  <Stack>
                    <Text
                      fontSize="5xl"
                      color="brand.yellow.100"
                      className={evening.className}
                    >
                      {step.title}
                    </Text>
                    <Text fontSize="2xl" color="brand.yellow.100">
                      {step.desc}
                    </Text>
                  </Stack>
                </HStack>
              </CardBody>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}
