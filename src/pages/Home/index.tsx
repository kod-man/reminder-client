import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  Tag,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsBell, BsSearch } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import Drawerr from "./Components/Drawer";

function HomePage() {
  return (
    <>
      <Flex
        direction="row"
        h={10}
        width="100%"
        bg="#db4c3f"
        flexDir="row"
        alignItems="center"
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
        <Box as={Button} bg="#db4c3f" color="white">
          {<BsSearch />}
          <Text ml={3} fontSize="xs">
            Search
          </Text>
        </Box>
        <Flex
          mt={0}
          mr={0}
          flexDirection="row"
          justifyContent="flex-end"
          h={10}
          bg="#db4c3f"
        >
          <Box as={Button} bg="#db4c3f" color="white">
            {<HiPlus />}
          </Box>
          <Box as={Button} bg="#db4c3f" color="white">
            {<BsBell />}
          </Box>
          <Tag
            display="block"
            m="auto"
            height={8}
            width={8}
            as={Button}
            bg="white"
            color="white"
            border={1}
            borderRadius="40"
            borderColor="white"
          >
            <Text color="#db4c3f">MC</Text>
          </Tag>
        </Flex>
      </Flex>
    </>
  );
}

export default HomePage;
