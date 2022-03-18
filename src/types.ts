import { Td } from "@chakra-ui/react";
import { ComponentProps } from "react";

export interface ExampleObject {
  id: string;
  user: string;
  status: string;
  actions: string;
  role: string;
  email: string
}

export type TdProps = ComponentProps<typeof Td>;