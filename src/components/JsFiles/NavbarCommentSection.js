import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import AddNewPost from "./add-new-post";

const NavbarCommentSection = () => {
  return (
    <Box position="sticky" top={0} p={4} bg="white.100" zIndex={1}>
      <Container maxW="md" centerContent>
        <Flex justifyContent="flex-end" w="100%" position="sticky" top={0}>
          <AddNewPost />
        </Flex>
      </Container>
    </Box>
  );
};

export default NavbarCommentSection;
