import React from "react";
import { ChatState } from "./Context/chatProvider.js";
import { IconButton, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/layout";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { getSender, getSenderObj } from "./config/chatLogic.js";
import ProfileModal from "./Misc/ProfileModal.js";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user, selectedChat, setSelectedChat } = ChatState();
  const MotionBox = motion(Box); // for animating transitions
  return (
    <>
      {selectedChat ? (
        <MotionBox
          key="chatDetails"
          initial={{ opacity: 0, x: -20 }} // Starting state
          animate={{ opacity: 1, x: 0 }} // Ending state
          exit={{ opacity: 0, x: 20 }} // Exit state
          transition={{ duration: 0.5 }} // Duration of the transition
        >
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            display="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              display={{ base: "flex", md: "none" }}
              icon={<ArrowBackIcon />}
              onClick={() => setSelectedChat("")}
            />
            {!selectedChat.isGroupChat ? (
              <>
                {getSender(user, selectedChat.users)}
                <ProfileModal user={getSenderObj(user, selectedChat.users)} />
              </>
            ) : (
              <>
                {selectedChat.chatName}
                {
                  //later maybe have something unique to diffentiate a grp from dm
                }
                {
                  //   <UpdateGroupModal
                  //     fetchAgain={fetchAgain}
                  //     setFetchAgain={setFetchAgain}
                  //   />
                }
              </>
            )}
          </Text>
          <Box
            display="flex"
            justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden"
          >
            {/* {messages here} */}
          </Box>
        </MotionBox>
      ) : (
        <MotionBox
          key="selectChat"
          initial={{ opacity: 0, x: 20 }} // Starting state
          animate={{ opacity: 1, x: 0 }} // Ending state
          exit={{ opacity: 0, x: -20 }} // Exit state
          transition={{ duration: 0.5 }} // Duration of the transition
          display="flex"
          alignContent="center"
          justifyContent="center"
          h="100%"
        >
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </MotionBox>
      )}
    </>
  );
};

export default SingleChat;
