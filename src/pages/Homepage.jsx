import React from "react";
import { Box, Button, Heading, Image } from "@chakra-ui/react";

export default function Homepage() {
  const isMobile = window.innerWidth <= 768;

  return (
    <Box
      textAlign="center"
      py={10}
      px={6}
      backgroundColor={"#fcf7ef"}
      minH={"80vh"}
      w={"100vw"}
    >
      <Heading
        size={isMobile ? "4xl" : "6xl"}
        cursor="pointer"
        onClick={() => navigate("/")}
      >
        Our News
      </Heading>
      <p>Welcome to my blog! Stay updated with the latest news and articles.</p>
      <Image
        src="https://plus.unsplash.com/premium_photo-1661265944044-bc7248ae54f9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        height={isMobile ? "300px" : "60vh"}
        objectFit="cover"
        alt="Blog Home image"
        width={isMobile ? "320px" : "80vw"}
        margin={"auto"}
        my={6}
      />

      <Button width={"200px"} p={isMobile ? 3 : 6}>
        Add New Post
      </Button>
    </Box>
  );
}
