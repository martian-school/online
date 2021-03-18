import React from "react";
import { Avatar, Flex } from "@chakra-ui/react";

import { Logo } from "../atoms";
import type { TAppBaseTemplateProps } from "../templates";

type THeaderProps = Pick<TAppBaseTemplateProps, "userName">;

export const Header = ({ userName }: THeaderProps) => (
  <Flex h="100%" justify="space-between" align="center">
    <Flex align="center">
      <Logo />
    </Flex>
    <Avatar name={userName} />
  </Flex>
);
