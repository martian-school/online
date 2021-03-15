import React from "react";
import { Box } from "@chakra-ui/react";

import Link from "next/link";


export default function Second() {
  return (
    <>
      <Box>Second</Box>
      <Link shallow href="/">
        <a>Index</a>
      </Link>
    </>
  );
}
