import {
  Box,
  Heading,
  Grid,
  VStack,
  Skeleton,
  Text,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { PostCard } from "../components/shared/PostCard";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "../components/shared/SearchBar";
import { FiSearch } from "react-icons/fi";
import { postsAPI } from "../services/api";

const MotionBox = motion.div;

const LoadingSkeleton = () => (
  <Box w="100%" borderWidth="1px" borderRadius="md" p={5} boxShadow="sm" mb={4}>
    <Skeleton height="24px" mb={2} />
    <Skeleton height="20px" mb={2} />
    <Skeleton height="16px" />
  </Box>
);

export default function PostPage() {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (handleSearch) {
      handleSearch(value);
    }
  };
  const handleSearch = (query) => {
    setSearchQuery(query);
    fetchPosts(query);
  };

  // useEffect(() => {
  //   fetch("http://localhost:1337/api/posts?populate=PostImage")
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data.data))
  //     .catch((error) => setError(error));
  // }, []);
  const fetchPosts = async (search = "") => {
    try {
      setIsLoading(true);
      const fetchedPosts = await postsAPI.getAll(search);
      setPosts(fetchedPosts);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch posts. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <>
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
        <VStack spacing={4} align="stretch" w="100%" mt={8}>
          {[1, 2, 3].map((i) => (
            <LoadingSkeleton key={i} />
          ))}
        </VStack>
      </>
    );
  }
  return (
    <Box w={"100vw"} placeItems={"center"} p={4}>
      <Stack
        direction={"column"}
        alignItems={"center"}
        mb={6}
        spacing={3}
        w={"100%"}
      >
        <Heading size="4xl" cursor="pointer" mb={3}>
          Posts Page
          <IconButton m={2} onClick={() => setShowSearch(!showSearch)}>
            <FiSearch size={24} />
          </IconButton>
        </Heading>
        {showSearch && (
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
        )}{" "}
      </Stack>
      {error ? (
        <p>Error: {error.message}</p>
      ) : posts.length === 0 ? (
        <MotionBox
          key="no-posts"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Text textAlign="center" color="gray.500" py={8}>
            No posts found.
          </Text>
        </MotionBox>
      ) : (
        <>
          {isMobile ? (
            <Grid templateColumns="repeat(1, 1fr)" gap="6">
              <AnimatePresence>
                {posts?.map((post) => (
                  <MotionBox
                    key={post.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <PostCard
                      id={post.id}
                      key={post.id}
                      title={post.Tittle}
                      description={post.Content}
                      date={post.createdAt}
                      tags={post.tags}
                      image={
                        post?.PostImage?.formats?.medium?.url ||
                        post?.PostImage?.url
                      }
                      author={post.Author}
                    />
                  </MotionBox>
                ))}
              </AnimatePresence>
            </Grid>
          ) : isTablet ? (
            <Grid templateColumns="repeat(2, 1fr)" gap="6">
              <AnimatePresence>
                {posts?.map((post) => (
                  <MotionBox
                    key={post.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <PostCard
                      id={post.id}
                      key={post.id}
                      title={post.Tittle}
                      description={post.Content}
                      date={post.createdAt}
                      tags={post.tags}
                      image={
                        post?.PostImage?.formats?.medium?.url ||
                        post?.PostImage?.url
                      }
                      author={post.Author}
                    />
                  </MotionBox>
                ))}
              </AnimatePresence>
            </Grid>
          ) : (
            <Grid templateColumns="repeat(3, 1fr)" gap="6">
              <AnimatePresence>
                {posts?.map((post) => (
                  <MotionBox
                    key={post.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <PostCard
                      id={post.id}
                      key={post.id}
                      title={post.Tittle}
                      description={post.Content}
                      date={post.createdAt}
                      tags={post.tags}
                      image={
                        post.PostImage.formats?.medium?.url ||
                        post.PostImage.url
                      }
                      author={post.Author}
                    />
                  </MotionBox>
                ))}
              </AnimatePresence>
            </Grid>
          )}
        </>
      )}
    </Box>
  );
}
