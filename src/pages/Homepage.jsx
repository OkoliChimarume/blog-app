import React from "react";
import { Box, Button, Center, Heading, Image } from "@chakra-ui/react";
import { AddPosts } from "./AddPost";

export default function Homepage() {
  const isMobile = window.innerWidth <= 768;

  return (
    <Box textAlign="center" placeContent="center" minH={"70vh"} w={"100vw"}>
      <Heading
        size={isMobile ? "2xl" : "4xl"}
        pt={5}
        cursor="pointer"
        onClick={() => navigate("/")}
      >
        Our News
      </Heading>
      <p style={{ fontSize: "14px", wordBreak: "break-all" }}>
        Welcome to my blog! Stay updated with the latest news and articles.
      </p>
      <Image
        src="https://plus.unsplash.com/premium_photo-1661265944044-bc7248ae54f9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        height={isMobile ? "300px" : "55vh"}
        objectFit="cover"
        alt="Blog Home image"
        width={isMobile ? "320px" : "80vw"}
        margin={"auto"}
        my={6}
      />

      <AddPosts isNav={false}/>
    </Box>
  );
}
