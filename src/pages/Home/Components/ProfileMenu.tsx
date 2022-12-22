import {
  Box,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlinePrinter, AiOutlineStar } from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { BsDownload, BsPeople } from "react-icons/bs";
import { FiActivity, FiSettings } from "react-icons/fi";
import { IoIosGitCompare } from "react-icons/io";
import { VscSymbolColor } from "react-icons/vsc";

const ProfileMenu = () => {
  return (
    <Menu>
      <Flex
        as={MenuButton}
        _hover={{ bg: "gray.200" }}
        cursor="pointer"
        padding={1}
        w={8}
        h={8}
        border="1px solid white"
        fontSize="xs"
        color="green"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        borderRadius="50%"
      >
        MC
      </Flex>
      <MenuList>
        <Flex
          cursor="pointer"
          _hover={{ backgroundColor: "#f3f3f3" }}
          mr="1"
          ml="1"
          mb="2"
          borderRadius="5"
        >
          <Box>
            <Flex>
              <Flex
                m={1}
                w={12}
                h={12}
                border="3px solid #db4c3f"
                fontSize="xl"
                color="#db4c3f"
                alignItems="center"
                justifyContent="center"
                backgroundColor="white"
                borderRadius="50%"
              >
                MC
              </Flex>
              <VStack>
                <Flex flexDir="column" m={2}>
                  <Text as="b" fontSize="sm">
                    Murat Can
                  </Text>
                  <Text fontSize="xm">muratal0606@gmail.com</Text>
                </Flex>
              </VStack>
            </Flex>
            <Flex alignItems="center" ml={2} mb="1">
              <Box h={4} w={4} mr="1" justifyContent="flex-start">
                <FiSettings color="gray" />
              </Box>
              <Box>
                <Text fontSize="small" ml="2">
                  Settings
                </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Divider />
        <MenuItem
          _hover={{
            color: "black",
            backgroundColor: "#f3f3f3",
            display: "flex",
            padding: "1 , 1",
            marginLeft: "1",
            marginTop: "1",
            marginBottom: "2",
            borderRadius: "5",
            maxW: "96%",
          }}
        >
          <Flex justifyContent="flex-start" alignItems="center" mb={1}>
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <VscSymbolColor color="gray" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Theme
              </Text>
            </Box>
          </Flex>
        </MenuItem>
        <MenuItem
          _hover={{
            color: "black",
            backgroundColor: "#f3f3f3",
            display: "flex",
            padding: "1 , 1",
            marginLeft: "1",
            marginTop: "1",
            marginBottom: "2",
            borderRadius: "5",
            maxW: "96%",
          }}
        >
          <Flex justifyContent="flex-start" alignItems="center" mb={1}>
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <FiActivity color="gray" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Activity log
              </Text>
            </Box>
          </Flex>
        </MenuItem>
        <MenuItem
          _hover={{
            color: "black",
            backgroundColor: "#f3f3f3",
            display: "flex",
            padding: "1 , 1",
            marginLeft: "1",
            marginTop: "1",
            marginBottom: "2",
            borderRadius: "5",
            maxW: "96%",
          }}
        >
          <Flex justifyContent="flex-start" alignItems="center" mb={1}>
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <AiOutlinePrinter color="gray" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Print
              </Text>
            </Box>
          </Flex>
        </MenuItem>
        <MenuItem
          _hover={{
            color: "black",
            backgroundColor: "#f3f3f3",
            display: "flex",
            padding: "1 , 1",
            marginLeft: "1",
            marginTop: "1",
            marginBottom: "2",
            borderRadius: "5",
            maxW: "96%",
          }}
        >
          <Flex justifyContent="flex-start" alignItems="center" mr="2">
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <IoIosGitCompare color="gray" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Integrations
              </Text>
            </Box>
          </Flex>
        </MenuItem>
        <Divider />
        <MenuItem
          _hover={{
            color: "black",
            backgroundColor: "#f3f3f3",
            display: "flex",
            padding: "1 , 1",
            marginLeft: "1",
            marginTop: "1",
            marginBottom: "2",
            borderRadius: "5",
            maxW: "96%",
          }}
        >
          <Flex justifyContent="flex-start" alignItems="center" mr="2">
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <AiOutlineStar color="#f4c771" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Upgrade to Pro
              </Text>
            </Box>
          </Flex>
        </MenuItem>
        <MenuItem
          _hover={{
            color: "black",
            backgroundColor: "#f3f3f3",
            display: "flex",
            padding: "1 , 1",
            marginLeft: "1",
            marginTop: "1",
            marginBottom: "2",
            borderRadius: "5",
            maxW: "96%",
          }}
        >
          <Flex justifyContent="flex-start" alignItems="center" mr="2">
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <BsPeople color="gray" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Upgrade to Business
              </Text>
            </Box>
          </Flex>
        </MenuItem>
        <MenuItem
          _hover={{
            color: "black",
            backgroundColor: "#f3f3f3",
            display: "flex",
            padding: "1 , 1",
            marginLeft: "1",
            marginTop: "1",
            marginBottom: "2",
            borderRadius: "5",
            maxW: "96%",
          }}
        >
          <Flex justifyContent="flex-start" alignItems="center" mr="2">
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <BsDownload color="gray" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Download Apps
              </Text>
            </Box>
          </Flex>
        </MenuItem>
        <MenuItem
          _hover={{
            color: "black",
            backgroundColor: "#f3f3f3",
            display: "flex",
            padding: "1 , 1",
            marginLeft: "1",
            marginTop: "1",
            marginBottom: "1",
            borderRadius: "5",
            maxW: "96%",
          }}
        >
          <Flex justifyContent="flex-start" alignItems="center" mr="2">
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <BiExit color="gray" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Log out
              </Text>
            </Box>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
