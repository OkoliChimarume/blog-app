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
} from "@chakra-ui/react";
import { useNavigation } from "react-router";

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
  // const navigate = useNavigation()

  return isMobile ? (
    <LinkBox
      as="article"
      _hover={{ shadow: "lg", cursor: "pointer" }}
      borderRadius={"md"}
      onClick={() => null}
    >
      <Card.Root flexDirection="column" overflow="hidden" gap={2} maxW="xl">
        <Image objectFit="cover" W="full" src={image} alt={title} />
        <Box p={2}>
          <Card.Body>
            <Card.Title mb="2">{title}</Card.Title>
            <Card.Description>{description}</Card.Description>
            <HStack my="4">
              {tags?.map((tag, index) => (
                <Badge key={index} colorScheme="teal" p={1}>
                  {tag}
                </Badge>
              ))}
            </HStack>
          </Card.Body>
          <Card.Footer>
            <Stack direction="row" w="100%" pb={2}>
              <Text textStyle="xs">{author} •</Text>
              <Text textStyle="xs">{new Date(date).toDateString()}</Text>
            </Stack>
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
        _hover={{ backgroundColor: "#fcf7ef" }}
      >
        <Image objectFit="cover" maxW="200px" src={image} alt={title} />
        <Box>
          <Card.Body>
            <Card.Title mb="2">{title}</Card.Title>
            <Card.Description>{description}</Card.Description>
            <HStack my="4">
              {tags?.map((tag, index) => (
                <Badge key={index} colorScheme="teal" p={1}>
                  {tag}
                </Badge>
              ))}
            </HStack>
          </Card.Body>
          <Card.Footer>
            <Stack direction="row" w="100%" pb={2}>
              <Text textStyle="xs">{author} •</Text>
              <Text textStyle="xs">{new Date(date).toDateString()}</Text>
            </Stack>
          </Card.Footer>
        </Box>
      </Card.Root>
    </LinkBox>
  );
};
