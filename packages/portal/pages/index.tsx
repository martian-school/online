import { Box } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";


export default function Home({ userName }) {
  return (
    <>
      <Box>Home</Box>
      <Link shallow href="/second">
        <a>Second</a>
      </Link>
    </>
  );
}
