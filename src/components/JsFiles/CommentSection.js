import { Container, Flex, Spinner, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Post from "./post";
import { db } from "./Firebase";
import NavbarCommentSection from "./NavbarCommentSection";

const CommentSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Hook to handle the real-time updating of posts whenever there is a
    // change in the datastore (https://firebase.google.com/docs/firestore/query-data/listen#view_changes_between_snapshots)

    db.collection("posts")
      .orderBy("createdAt", "asc")
      .onSnapshot((querySnapshot) => {
        const _posts = [];

        querySnapshot.forEach((doc) => {
          _posts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPosts(_posts);
      });
  }, []);

  return (
    <>
      <Container maxW="md" centerContent p={8}>
        <VStack spacing={8} w="100%">
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </VStack>
      </Container>
      <NavbarCommentSection />
    </>
  );
};

export default CommentSection;
