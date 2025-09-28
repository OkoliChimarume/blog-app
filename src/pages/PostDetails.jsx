import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Badge,
  Spinner,
  Stack,
  Heading,
  Container,
} from "@chakra-ui/react";
import { postsAPI } from "../services/api";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await postsAPI.getById(id);
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Box textAlign="center" mt="20">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!post) {
    return (
      <Box textAlign="center" mt="20">
        <Text>Post not found.</Text>
      </Box>
    );
  }

  return (
    <Container maxW="3xl" py={8}>
      <Image
        src={`http://localhost:1337${post.image}`}
        alt={post.title}
        borderRadius="md"
        mb={6}
        objectFit="cover"
        w="full"
      />
      <Heading mb={2}>{post.title}</Heading>
      <Stack direction="row" spacing={2} mb={4}>
        {post.tags?.map((tag) => (
          <Badge key={tag.id || tag.name} colorScheme="teal">
            {tag.name}
          </Badge>
        ))}
      </Stack>
      <Text color="gray.500" mb={4}>
        By {post.author} • {new Date(post.date).toDateString()}
      </Text>
      <Text fontSize="lg">{post.description}</Text>
    </Container>
  );
}
