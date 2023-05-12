import React from 'react'
import { ChatState } from '../Context/ChatProvider';
import { Box } from '@mui/material';
import MyChats from '../chat/MyChats';
import Chatbox from '../chat/Chatbox';

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = React.useState(false);
  const { user } = ChatState();


  return (
    <div style={{ width: "100%" }}>
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
}

export default Chatpage 