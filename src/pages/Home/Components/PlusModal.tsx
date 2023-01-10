import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiGitCompare } from "react-icons/bi";
import ClockIcon from "../../../icons/ClockIcon";
import FlagIcon from "../../../icons/FlagIcon";
import InboxIcon from "../../../icons/InboxIcon";
import IntegrationIcon from "../../../icons/IntegrationIcon";
import LabelIcon from "../../../icons/LabelIcon";
import MiniFlagIcon from "../../../icons/MiniFlagIcon";
import MiniLabelIcon from "../../../icons/MiniLabelIcon";
import PlusIcon from "../../../icons/PlusIcon";
import TodayIcon from "../../../icons/TodayIcon";
import MyTooltip from "./MyTooltip";

const prioData = [
  {
    text: "Low",
    color: "gray",
  },
  { text: "Medium", color: "green" },
  { text: "High", color: "red" },
];

const PlusModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const usersId = sessionStorage.getItem("userId");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priority, setPriority] = React.useState("Low");
  const [iconColor, setIconColor] = React.useState(prioData[0].color);

  const [selectedPrio, setSelectedPrio] = React.useState(prioData[0]);

  const onChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value.trim());
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value.trim());
  };

  const userData = {
    title,
    priority,
    description,
    date: "",
    usersId,
  };
  const seeData = () => {
    console.log(userData);
  };

  return (
    <>
      <Flex
        bg="#db4c3f"
        as={Button}
        onClick={onOpen}
        _hover={{ bg: "#e27065" }}
        cursor="pointer"
        borderRadius="20%"
        padding={1}
        h="8"
      >
        <PlusIcon color="white" />
      </Flex>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="md"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody pb={3}>
            <Input
              placeholder="Task name"
              border="none"
              fontSize="20"
              fontFamily="inherit"
              textColor="#2b2b2b"
              variant="unstyled"
              onChange={onChangeTaskName}
            />
            <Input
              placeholder="Description"
              border="none"
              fontSize="small"
              variant="unstyled"
              onChange={onChangeDescription}
            />
            <Flex mt={5}>
              <Button
                display="flex"
                boxSizing="border-box"
                justifyContent="space-between"
                align-item="center"
                height="28px"
                padding="0 8px"
                color="green"
                size="sm"
                background="white"
                border="1px solid #ccc"
                transition="background-color .3s cubic-bezier(.4,0,.2,1)"
              >
                <TodayIcon color="#058527!important" />
                <Text ml={1} fontSize="xs">
                  Today
                </Text>
              </Button>

              <MyTooltip label="Select a project #">
                <Button
                  display="flex"
                  boxSizing="border-box"
                  justifyContent="space-between"
                  align-item="center"
                  height="28px"
                  padding="0 8px"
                  color="green"
                  size="sm"
                  background="white"
                  border="1px solid #ccc"
                  transition="background-color .3s cubic-bezier(.4,0,.2,1)"
                  ml={2}
                >
                  <InboxIcon color="#246fe0" />
                  <Text ml={1} fontSize="xs" color="gray.600">
                    Inbox
                  </Text>
                </Button>
              </MyTooltip>
              <Flex ml="auto">
                <Menu closeOnSelect={false}>
                  <MyTooltip label="Add label(s) @">
                    <MenuButton
                      background="white"
                      bgColor="white"
                      _hover={{ bg: "gray.200" }}
                      mx={1}
                      as={IconButton}
                      borderRadius={5}
                      color="white"
                      size="sm"
                      bg="#edf2f7"
                      icon={<LabelIcon color="gray" />}
                      variant="Flushed"
                    ></MenuButton>
                  </MyTooltip>
                  <MenuList scale="sm">
                    <VStack align="stretch" as={MenuItem} background="white">
                      <Stack
                        bg="white"
                        h={8}
                        w="100%"
                        backgroundColor="white !important"
                      >
                        <Input
                          onClick={(e) => e.stopPropagation()}
                          type="text"
                          border="none"
                          width="100%"
                          placeholder="Type a label"
                          size="md"
                        />
                      </Stack>
                      <Divider />
                      <Flex
                        border="none"
                        flexDirection="row"
                        alignItems="center"
                        background="#f3f3f3"
                        width="100%"
                        height="100%"
                      >
                        <MiniLabelIcon color="gray" />
                        <Text mx={2} color="black">
                          read
                        </Text>
                        <Checkbox color="gray" ml="10"></Checkbox>
                      </Flex>
                    </VStack>
                  </MenuList>
                </Menu>

                <Menu>
                  <MyTooltip label="Set the priority  Low, Medium, High">
                    <MenuButton
                      background="white"
                      borderColor="gray.300"
                      bgColor="white"
                      _hover={{ bg: "gray.200" }}
                      mx={1}
                      as={IconButton}
                      borderRadius={5}
                      color="white"
                      size="sm"
                      bg="#edf2f7"
                      icon={<FlagIcon color={iconColor} />}
                      variant="Flushed"
                    />
                  </MyTooltip>
                  <MenuList>
                    {prioData.map((prio) => (
                      <MenuItemOption
                        onClick={() => {
                          setSelectedPrio(prio);
                          setIconColor(prio.color);
                          setPriority(prio.text);
                        }}
                      >
                        <Flex>
                          <MiniFlagIcon color={prio.color} />
                          <Text fontSize="sm" ml={3}>
                            {prio.text}
                          </Text>
                        </Flex>
                      </MenuItemOption>
                    ))}
                  </MenuList>
                </Menu>
                <Popover placement="start">
                  <MyTooltip label="Add reminder(s)">
                    <Box display="inline-block">
                      <PopoverTrigger>
                        <Button
                          background="white"
                          borderColor="gray.300"
                          bgColor="white"
                          _hover={{ bg: "gray.200" }}
                          mx={1}
                          as={IconButton}
                          borderRadius={5}
                          color="white"
                          size="sm"
                          bg="#edf2f7"
                          icon={<ClockIcon color="gray" />}
                          variant="Flushed"
                        ></Button>
                      </PopoverTrigger>
                    </Box>
                  </MyTooltip>
                  <PopoverContent width={450} height={150}>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader as="b" p="1 2">
                      Go Pro
                    </PopoverHeader>
                    <Text m={2} fontSize="sm">
                      Reminders are only available on Pro and Business plans.
                    </Text>
                    <PopoverBody ml="auto" mt={5}>
                      <Button
                        size="sm"
                        mr={2}
                        mb="2"
                        as={PopoverCloseButton}
                        w="16"
                      >
                        Cancel
                      </Button>
                      <Button
                        color="white"
                        bg="tomato"
                        size="sm"
                        _hover={{ backgroundColor: "red.500" }}
                      >
                        Upgrade for more
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>

                <Menu>
                  <MyTooltip label="Insert from integration">
                    <MenuButton
                      background="white"
                      borderColor="gray.300"
                      bgColor="white"
                      _hover={{ bg: "gray.200" }}
                      mx={1}
                      as={IconButton}
                      borderRadius={5}
                      color="white"
                      size="sm"
                      bg="#edf2f7"
                      icon={<IntegrationIcon color="gray" />}
                      variant="Flushed"
                    ></MenuButton>
                  </MyTooltip>
                  <MenuList>
                    <Flex>
                      <Box mx="2">
                        <BiGitCompare color="gray" />
                      </Box>
                      <Text mx="3" fontSize="xs">
                        Add extenstion...
                      </Text>
                    </Flex>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>
          </ModalBody>
          <Divider border=".25" />
          <ModalFooter>
            <Button onClick={onClose} size="sm">
              Cancel
            </Button>
            <Button
              colorScheme="red"
              ml={2}
              size="sm"
              disabled={!title.trim()}
              onClick={seeData}
            >
              Add task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlusModal;
