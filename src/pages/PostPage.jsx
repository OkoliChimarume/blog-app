import { Box, Heading, Grid } from "@chakra-ui/react";
import { PostCard } from "../components/shared/PostCard";
import { i, title } from "framer-motion/client";
import { posts } from "../data/post";

export default function PostPage() {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  return (
    <Box w={"100vw"} placeItems={"center"} p={4}>
      <Heading size="4xl" cursor="pointer" mb={3}>
        Posts Page
      </Heading>
      {isMobile ? (
        <Grid templateColumns="repeat(1, 1fr)" gap="6">
          {posts?.map((post) => (
            <PostCard
              id={post.id}
              key={post.id}
              tittle={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              image={post.image}
              author={post.author}
            />
          ))}
        </Grid>
      ) : isTablet ? (
        <Grid templateColumns="repeat(2, 1fr)" gap="6">
          {posts?.map((post) => (
            <PostCard
              id={post.id}
              key={post.id}
              tittle={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              image={post.image}
              author={post.author}
            />
          ))}
        </Grid>
      ) : (
        <Grid templateColumns="repeat(3, 1fr)" gap="6">
          {posts?.map((post) => (
            <PostCard
              id={post.id}
              key={post.id}
              tittle={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              image={post.image}
              author={post.author}
            />
          ))}
        </Grid>
      )}
    </Box>
  );
}
