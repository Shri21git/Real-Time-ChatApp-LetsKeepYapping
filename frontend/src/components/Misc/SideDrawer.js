import { Box, Button, Tooltip } from "@chakra-ui/react";
import React, { useState } from "react";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setloadingChat] = useState();

  return (
    <>
      <Box>
        <Tooltip
          label="Seach users to start chatting"
          hasArrow
          placement="bottom-end"
        >
          <Button>
            <i class="fa-brands fa-searchengin"></i>
          </Button>
        </Tooltip>
      </Box>
    </>
  );
};

export default SideDrawer;
