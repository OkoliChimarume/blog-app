import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Flex, Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <Flex gap="2" direction="column" minHeight="100vh">
      <Navbar />
      <Box flex="1" as="main">
        <Container maxW="6xl">
         <Outlet />
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
}
