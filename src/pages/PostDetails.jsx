import { Box } from "@chakra-ui/react";
import React from "react";

export default function PostDetails() {
  return (
    <Box>
      <Heading size="4xl" cursor="pointer" onClick={() => navigate("/")}>
        PostDetails
      </Heading>
    </Box>
  );
}
