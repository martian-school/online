import React from "react";
import { Box } from "@chakra-ui/react";

import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import categoryPaths from "../../mock/category";

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: JSON.parse(categoryPaths).map(({ id }) => ({
    params: { category: id },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async () => ({
  props: { categoryPaths: JSON.parse(categoryPaths) },
});

export default function Category({ categoryPaths, foo }) {
  return (
    <>
      {categoryPaths.map(({ name }) => (
        <Box>{name}</Box>
      ))}
      <Box>{foo}</Box>
      <Link shallow href="/">
        <a>Index</a>
      </Link>
    </>
  );
}

