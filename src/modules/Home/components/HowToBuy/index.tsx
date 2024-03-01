"use client";

import { Box, Card, CardBody, HStack, Stack, Text } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

import Container from "@/components/Container";
import Title from "@/components/Title";
import { evening } from "@/constants/fonts";
import { howToBuySteps } from "@/constants/howToBuySteps";

import s from "./style.module.scss";

export default function HomeHowToBuy(): React.ReactElement {
  const stepsRef = useRef<HTMLDivElement[]>([]);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      stepsRef.current.forEach((step) => {
        ScrollTrigger.create({
          once: true,
          trigger: step,
          start: "top bottom",
          end: "bottom bottom",
          markers: true,
          onEnter: () => {
            gsap.fromTo(
              step,
              {
                opacity: 0,
                y: "-30%",
                ease: "power1",
                clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
                duration: 2.5,
              },
              {
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                y: "0%",
              },
            );
          },
        });
      });
    }, [stepsRef]);
    return () => {
      gsapContext.revert();
    };
  }, [stepsRef]);

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
              opacity={0}
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
                    <Box className={s.htb_desc}>{step.desc}</Box>
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
