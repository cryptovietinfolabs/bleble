import { ChakraProps, Text } from "@chakra-ui/react";

import s from "./style.module.scss";
import { evening } from "@/constants/fonts";

interface ITitle extends ChakraProps {
  className?: string;
  children: string;
  size?: "lg" | "md" | "sm";
}

export default function Title({
  size = "lg",
  className,
  children,
  color,
}: ITitle): React.ReactElement {
  const classNameSize = s[`title__${size}`];

  return (
    <Text
      className={`${s.title} ${classNameSize} ${className} ${evening.className}`}
      color={color}
      lineHeight="100%"
    >
      {children}
    </Text>
  );
}
