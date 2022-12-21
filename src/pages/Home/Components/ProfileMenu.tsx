import {
  Box,
  Divider,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlinePrinter } from "react-icons/ai";
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
            <Flex>
              <HStack justifyContent="flex-start" alignItems="center" mb={1}>
                <Box h={4} w={4} mr="1">
                  <FiSettings color="#c3c3c3" />
                </Box>
                <Text fontSize="small">Settings</Text>
              </HStack>
              <Text
                fontSize="x-small"
                ml="20"
                mt="2"
                mr="1"
                as="sub"
                textColor="GrayText"
              >
                0 then S
              </Text>
            </Flex>
          </VStack>
        </Flex>
        <Divider />
        <MenuItem _hover={{ color: "black", backgroundColor: "#f3f3f3" }}>
          <Flex justifyContent="flex-start" alignItems="center" mb={1}>
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <VscSymbolColor color="#c3c3c3" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Theme
              </Text>
            </Box>
            <Box width={10} ml="32">
              <Text fontSize="x-small" textColor="GrayText" ml={0}>
                0 then T
              </Text>
            </Box>
          </Flex>
        </MenuItem>
        <MenuItem _hover={{ color: "black", backgroundColor: "#f3f3f3" }}>
          <Flex justifyContent="flex-start" alignItems="center" mb={1}>
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <FiActivity color="#c3c3c3" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Activity log
              </Text>
            </Box>
            <Box width={10} ml="32">
              <Text fontSize="x-small" textColor="GrayText">
                G then A
              </Text>
            </Box>
          </Flex>
        </MenuItem>
        <MenuItem _hover={{ color: "black", backgroundColor: "#f3f3f3" }}>
          <Flex justifyContent="flex-start" alignItems="center" mb={1}>
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <AiOutlinePrinter color="#c3c3c3" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Print
              </Text>
            </Box>
            <Box width={10} ml="32">
              <Text fontSize="x-small" textColor="GrayText" ml={4}>
                CtrlP
              </Text>
            </Box>
          </Flex>
        </MenuItem>
        <MenuItem _hover={{ color: "black", backgroundColor: "#f3f3f3" }}>
          <Flex
            justifyContent="flex-start"
            alignItems="center"
            mr="2"
            borderRadius="4%"
          >
            <Box h={4} w={4} mr="1" justifyContent="flex-start">
              <IoIosGitCompare color="gray" />
            </Box>
            <Box>
              <Text fontSize="small" ml="2">
                Integration
              </Text>
            </Box>
          </Flex>
          <Divider />
        </MenuItem>
        <Divider />
        <MenuItem _hover={{ color: "black", backgroundColor: "#f3f3f3" }}>
          5
        </MenuItem>
        <MenuItem _hover={{ color: "black", backgroundColor: "#f3f3f3" }}>
          6
        </MenuItem>
        <MenuItem _hover={{ color: "black", backgroundColor: "#f3f3f3" }}>
          7
        </MenuItem>
        <MenuItem _hover={{ color: "black", backgroundColor: "#f3f3f3" }}>
          8
        </MenuItem>
        <MenuItem _hover={{ color: "black", backgroundColor: "#f3f3f3" }}>
          9
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
