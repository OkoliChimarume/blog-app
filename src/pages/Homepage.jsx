import React from "react";
import { Button, HStack } from "@chakra-ui/react";

export default function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
    </div>
  );
}
