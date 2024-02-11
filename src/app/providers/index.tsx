import { ILayout } from "@/shared/types";
import { ChakraProvider } from "@chakra-ui/react";

export const Providers = ({ children }: ILayout) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
