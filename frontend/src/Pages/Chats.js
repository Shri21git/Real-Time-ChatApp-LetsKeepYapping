import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/Misc/SideDrawer.js";
import MyChats from "../components/MyChats.js";
import ChatBox from "../components/ChatBox.js";
import { ChatState } from "../components/Content/chatProvider.js";

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
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default Chat;
