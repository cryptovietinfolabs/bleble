"use client";

import { BleBleThemeProvider } from "@/contexts/BleBleThemeProvider";
import { ScrollProvider } from "@/contexts/ScrollProvider";
import { UiProvider } from "@/contexts/UiProvider";

type ProviderType = {
  children: React.ReactNode;
};

export default function Providers({
  children,
}: ProviderType): React.ReactElement {
  return (
    <UiProvider>
      <BleBleThemeProvider cookies={"blastTheme"}>
        <ScrollProvider>{children}</ScrollProvider>
      </BleBleThemeProvider>
    </UiProvider>
  );
}
