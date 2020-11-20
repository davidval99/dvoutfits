import { Flex, Box, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import VoteButtons from "./vote-buttons";

const Post = ({ post }) => {
  return (
    <Box alignItems>
      <Flex color="Black">
        <Box bg="grey.80" w="100px" p={1} color="black">
          <Text>username:</Text>
        </Box>
      </Flex>
      <Flex color="Black">
        <VoteButtons post={post} />
        <Box bg="gray.100" p={4} rounded="md" w="600px">
          <Text>{post.title}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Post;
