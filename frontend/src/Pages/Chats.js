import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/Misc/SideDrawer.js";
import MyChats from "../components/MyChats.js";
import ChatBox from "../components/ChatBox.js";
import { ChatState } from "../components/Context/chatProvider.js";
import { useState } from "react";

// const Chats = () => {
//   const [chats, setChats] = useState([]);

//   const fetchChats = async () => {
//     const { data } = await axios.get("/api/chats");

//     setChats(data);
//   };

//   useEffect(() => {
//     fetchChats();
//   });

const Chat = () => {
  const { user } = ChatState();
  const [fetchChats, setFetchChats] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="90vh"
        p="10px"
      >
        {user && (
          <MyChats fetchChats={fetchChats} />
        )}
        {user && (
          <ChatBox fetchChats={fetchChats} setFetchChats={setFetchChats} />
        )}
      </Box>
    </div>
  );
};

export default Chat;
