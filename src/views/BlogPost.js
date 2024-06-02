import React from 'react';
import { Box, Heading, Text, Flex, IconButton } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

// BlogPost component for displaying a single blog post
const BlogPost = ({ post }) => {
  return (
    <Box borderWidth="2px" borderColor="gray.200" borderRadius="lg" shadow="lg" p={6} mb={6} bg="white">
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h1" size="xl" fontWeight="bold">{post.title}</Heading> // Display post title
        <Box>
          <IconButton
            aria-label="Edit post"
            icon={<EditIcon />}
            mr={2}
            variant="outline"
            colorScheme="blue"
          /> // Edit post button
          <IconButton
            aria-label="Delete post"
            icon={<DeleteIcon />}
            variant="outline"
            colorScheme="red"
          /> // Delete post button
        </Box>
      </Flex>
      <Text color="gray.600" mb={4}>
        {post.description}
      </Text> // Display post description
      {/* Continue with the rest of your component */}
    </Box>
  );
};

export default BlogPost; // Exporting BlogPost component