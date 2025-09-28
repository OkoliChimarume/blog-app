// import { useNavigate } from "react-router-dom";
import {
  Badge,
  Box,
  Stack,
  Card,
  HStack,
  Image,
  Text,
  LinkBox,
  Flex,
  // useToast,
  IconButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { postsAPI } from "../../services/api";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";

export const PostCard = ({
  title,
  description,
  date,
  tags,
  image,
  author,
  id,
}) => {
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();
  // const toast = useToast();

  const handleView = (e) => {
    e.stopPropagation();
    navigate(`${id}`);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/edit/${post.id}`);
  };
  const handleDelete = async (e) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await postsAPI.delete(post.id);
        toast({
          title: "Post deleted",
          description: "The post has been successfully deleted.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        if (onDelete) {
          onDelete(post.id);
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to delete the post. Please try again.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return isMobile ? (
    <LinkBox
      as="article"
      _hover={{ shadow: "lg", cursor: "pointer" }}
      borderRadius={"md"}
      onClick={() => null}
    >
      <Card.Root
        flexDirection="column"
        overflow="hidden"
        gap={2}
        maxW="xl"
        _hover={{ backgroundColor: "gray.600" }}
      >
        <Image
          objectFit="cover"
          W="full"
          src={`http://localhost:1337${image}`}
          alt={title}
        />
        <Box p={2}>
          <Card.Body>
            <Card.Title mb="2">{title}</Card.Title>
            <Card.Description>{description}</Card.Description>
            <HStack my="4">
              {tags?.map((tag, index) => (
                <Badge key={index} colorScheme="teal" p={1}>
                  {tag.name}
                </Badge>
              ))}
            </HStack>
          </Card.Body>
          <Card.Footer py={2} pr={2}>
            <Stack direction="row" w="100%" pb={2}>
              <Text textStyle="xs">{author} •</Text>
              <Text textStyle="xs">{new Date(date).toDateString()}</Text>
            </Stack>
            <Flex gap={1}>
              <IconButton
                onClick={(e) => handleView(e)}
                variant="ghost"
                colorScheme="blue"
              >
                <FiEye size={24} />
              </IconButton>
              {/* <IconButton onClick={handleEdit} variant="ghost">
                <FiEdit size={24} />
              </IconButton> */}
              <IconButton
                aria-label="Delete post"
                onClick={handleDelete}
                variant="ghost"
                color="red"
              >
                <FiTrash2 size={24} />
              </IconButton>
            </Flex>
          </Card.Footer>
        </Box>
      </Card.Root>
    </LinkBox>
  ) : (
    <LinkBox
      as="article"
      _hover={{ shadow: "lg", cursor: "pointer" }}
      borderRadius={"md"}
      onClick={() => null}
    >
      <Card.Root
        flexDirection="row"
        overflow="hidden"
        gap={2}
        maxW="xl"
        _hover={{ backgroundColor: "gray.600" }}
      >
        <Image
          objectFit="cover"
          maxW="200px"
          src={`http://localhost:1337${image}`}
          alt={title}
        />
        <Box>
          <Card.Body>
            <Card.Title mb="2">{title}</Card.Title>
            <Card.Description>{description}</Card.Description>
            <HStack my="4">
              {tags?.map((tag, index) => (
                <Badge key={index} colorScheme="teal" p={1}>
                  {tag.name}
                </Badge>
              ))}
            </HStack>
          </Card.Body>
          <Card.Footer py={2} pr={2}>
            <Stack direction="row" w="100%" pb={2}>
              <Text textStyle="xs">{author} •</Text>
              <Text textStyle="xs">{new Date(date).toDateString()}</Text>
            </Stack>
            <Flex gap={1}>
              <IconButton
                onClick={(e) => handleView(e)}
                variant="ghost"
                colorScheme="blue"
              >
                <FiEye size={24} />
              </IconButton>
              {/* <IconButton onClick={handleEdit} variant="ghost">
                <FiEdit size={24} />
              </IconButton> */}
              <IconButton
                aria-label="Delete post"
                onClick={handleDelete}
                variant="ghost"
                color="red"
              >
                <FiTrash2 size={24} />
              </IconButton>
            </Flex>
          </Card.Footer>
        </Box>
      </Card.Root>
    </LinkBox>
  );
};
