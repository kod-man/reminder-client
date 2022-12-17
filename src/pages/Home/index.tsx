import { Box, Button, Flex, IconButton, Menu, MenuButton, Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Drawerr from "./Components/Drawer";

function HomePage() {
  return (
    <>
      <Flex
        height="10"
        width="100%"
        bg="#db4c3f"
        border={1}
        borderColor="black"
        flexDir="row"
      >
        <Drawerr />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<AiOutlineHome />}
            bg="#db4c3f"
            color="white"
          />
        </Menu>
        <Box as={Button} bg="#db4c3f"
            color="white"  >
          {<BsSearch />}
           <Text ml={3} fontSize='xs'  >Search</Text>
        </Box>

      </Flex>
    </>
  );
}

export default HomePage;
