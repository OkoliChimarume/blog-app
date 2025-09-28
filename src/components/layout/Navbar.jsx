import React from "react";
import { useNavigate, useLocation } from "react-router";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { AddPosts } from "../../pages/AddPost";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const isMobile = window.innerWidth <= 768;

  return (
    <Flex
      as="nav"
      bg="white"
      p={4}
      px={isMobile ? 4 : 10}
      color="black"
      justify="space-between"
      align="center"
      boxShadow="md"
    >
      <Heading
        size={isMobile ? "xl" : "2xl"}
        cursor="pointer"
        onClick={() => navigate("/")}
      >
        My <span style={{ color: "#c8b19f" }}>Blog</span>
      </Heading>

      <Box gap={isMobile ? 1 : 4} display="flex" alignItems="center">
        <Button
          variant="link"
          fontSize={isMobile ? "sm" : "lg"}
          color={isActive("/") ? "#c8b19f" : "Black"}
          mr={4}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
        <Button
          fontSize={isMobile ? "sm" : "lg"}
          variant="link"
          color={isActive("/posts") ? "#c8b19f" : "Black"}
          onClick={() => navigate("/posts")}
        >
          Posts
        </Button>
        <AddPosts isNav={true} />
      </Box>
    </Flex>
  );
};

export default Navbar;
