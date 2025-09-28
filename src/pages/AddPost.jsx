"use client";
import {
  Button,
  CloseButton,
  Portal,
  Drawer,
  Input,
  Textarea,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { postsAPI } from "../services/api";

export const AddPosts = ({ isNav }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState(null);

  const handleAddPost = async () => {
    const newPost = new FormData();
    newPost.append("title", title);
    newPost.append("content", content);
    newPost.append(
      "tags",
      JSON.stringify(tags.split(",").map((t) => t.trim()))
    );
    newPost.append("author", author);
    if (image) newPost.append("image", image);

    console.log("Saving post:", {
      title,
      content,
      tags,
      author,
      image,
    });
    e.stopPropagation();
    try {
      await postsAPI.create(newPost);
      toast({
        title: "Post Created",
        description: "The post has been successfully Created.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create the post. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button width={isNav ? "fit" : "200px"} p={isMobile ? 3 : 6}>
          Add Post
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content p={4} maxW="500px" py={10}>
            <Drawer.Header>
              <Drawer.Title fontSize="26px" textDecoration="underline">
                Add New Post
              </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Text fontSize="16px" py={2}>
                Please fill in the details of the new post in the form below 💕
              </Text>

              <form
                style={{
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
                // onSubmit={() => {
                //   handleAddPost()
                // }}
              >
                <Text fontSize="18px">Title</Text>
                <Input
                  p={4}
                  fontSize={17}
                  placeholder="Enter post title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <Text fontSize="18px">Content</Text>
                <Textarea
                  p={4}
                  fontSize={17}
                  placeholder="Write your content here..."
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />

                <Text fontSize="18px">Tags (comma separated)</Text>
                <Input
                  p={4}
                  fontSize={17}
                  placeholder="e.g. travel, lifestyle"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />

                <Text fontSize="18px">Author</Text>
                <Input
                  p={4}
                  fontSize={17}
                  placeholder="Author name"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />

                <Text fontSize="18px">Upload Image</Text>
                <Input
                  p={4}
                  fontSize={17}
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </form>
            </Drawer.Body>
            <Drawer.Footer>
              <Button p={2} variant="outline" w={130}>
                Cancel
              </Button>
              <Button
                p={2}
                colorScheme="teal"
                w={130}
                onClick={() => handleAddPost}
              >
                Save
              </Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};
