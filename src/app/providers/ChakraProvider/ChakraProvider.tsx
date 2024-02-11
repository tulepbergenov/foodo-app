import { ILayout } from "@/shared/types";
import {
  ChakraProvider as ChakraUIProvider,
  ColorModeScript,
} from "@chakra-ui/react";
import { theme } from "./ChakraProvider.theme";

export const ChakraProvider = ({ children }: ILayout) => {
  return (
    <ChakraUIProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraUIProvider>
  );
};
