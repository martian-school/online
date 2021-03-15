import React from "react";
import { Box } from "@chakra-ui/react";

import { promises } from "fs";
import Link from "next/link";

export async function getServerSideProps({ query }) {
  const { startTime } = query;

  await promises.writeFile(
    "./test-file.txt",
    `${new Date(new Date().getTime() + startTime/1000)}`
  );

  const data = await promises
    .readFile("./test-file.txt")
    .then((userName) => ({ userName: userName.toString() }));

  return { props: data };
}

export default function Second({ userName }) {
  return (
    <>
      <Box>{userName}</Box>
      <Link shallow href="/">
        <a>Index</a>
      </Link>
    </>
  );
}
