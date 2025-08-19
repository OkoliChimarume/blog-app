import { LinkBox } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";

export default function PostCard({post}) {
    const navigate = useNavigate()
  return (
    <LinkBox
      as="article"
      p={5}
      borderWidth={1}
      borderRadius={"md"}
      shadow="lg"
      _hover={{ shadow: "lg", cursor: "pointer" }}
      onClick={()=> navigate(`/posts/${post.id}`)}
    >

    </LinkBox>
  );
}
