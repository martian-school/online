import { Box } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const fakeAsync = (timeout: number) => <T extends {}>(data: T): Promise<T> =>
  new Promise((res) => setTimeout(() => res(data), timeout));
const smallDelayAsync = fakeAsync(600);

export async function getServerSideProps() {
  const data = await smallDelayAsync({ userName: "Andrey Smirnov" });
  console.log("server");

  return { props: data };
}

export default function Home({ userName }) {
  return (
    <>
      <Box>{userName}</Box>
      <Link shallow href="/second">
        <a>Second</a>
      </Link>
    </>
  );
}
