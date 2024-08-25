import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      fontSize="12px"
      bg="purple" // Use `bg` for background color
      color="white" // Use `color` for text color
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
