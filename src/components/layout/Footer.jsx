import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function Footer() {
  return (
    <Box py={6} mt={12} px={4} bg="gray.800" color="gray.200">
      <Flex
        direction={["column", "row"]}
        align="center"
        justify="space-between"
        mx="auto"
        px={4}
      >
        <Text fontSize={"sm"}>
          &copy; {new Date().getFullYear()} My Blog. All right reserved.
        </Text>
        <Stack direction="row" spacing={4} mt={["4", "0"]}>
          <Link href="/" _hover={{ textDecoration: "underline" }}>
            Home
          </Link>
          <Link href="/posts" _hover={{ textDecoration: "underline" }}>
            Posts
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}