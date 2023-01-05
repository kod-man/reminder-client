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
  MenuOptionGroup,
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
  Tooltip,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiGitCompare } from "react-icons/bi";
import { BsAlarm, BsFlagFill, BsInboxFill, BsPlus } from "react-icons/bs";
import { MdLabel, MdLabelOutline, MdToday } from "react-icons/md";

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
  const usersId = localStorage.getItem("userId");
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
      >
        <BsPlus color="white" size="30px" />
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
                color="green"
                size="sm"
                background="white"
                border="1px"
                borderColor="gray.300"
              >
                <MdToday />
                <Text ml={1} fontSize="xs">
                  Today
                </Text>
              </Button>

              <Tooltip
                hasArrow
                label="Select a project #"
                bg="black"
                color="white"
                borderRadius="5"
                placement="top-start"
              >
                <Button
                  color="blue"
                  size="sm"
                  ml={2}
                  background="white"
                  border="1px"
                  borderColor="gray.300"
                >
                  <BsInboxFill />
                  <Text ml={1} fontSize="xs" color="gray.600">
                    Inbox
                  </Text>
                </Button>
              </Tooltip>
              <Flex ml="auto">
                <Menu closeOnSelect={false}>
                  <Tooltip
                    hasArrow
                    label="Add label(s) @"
                    bg="black"
                    color="white"
                    borderRadius="5"
                    placement="top-start"
                  >
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
                      icon={
                        <MdLabelOutline
                          color="gray"
                          style={{ transform: "rotate(-45deg)" }}
                        />
                      }
                      variant="Flushed"
                    ></MenuButton>
                  </Tooltip>
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
                        <MdLabel
                          color="gray"
                          style={{ transform: "rotate(-45deg)" }}
                        />
                        <Text mx={2} color="black">
                          read
                        </Text>
                        <Checkbox color="gray" ml="10"></Checkbox>
                      </Flex>
                    </VStack>
                  </MenuList>
                </Menu>

                <Menu>
                  <Tooltip
                    hasArrow
                    label="Set the priority  Low, Medium, High"
                    bg="black"
                    color="white"
                    borderRadius="5"
                    placement="top-start"
                  >
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
                      icon={<BsFlagFill color={iconColor} />}
                      variant="Flushed"
                    ></MenuButton>
                  </Tooltip>
                  <MenuList>
                    <MenuOptionGroup>
                      {prioData.map((prio) => (
                        <MenuItemOption
                          onClick={() => {
                            setSelectedPrio(prio);
                            setIconColor(prio.color);
                          }}
                        >
                          <Flex>
                            <BsFlagFill color={prio.color} />
                            <Text>{prio.text}</Text>
                          </Flex>
                        </MenuItemOption>
                      ))}
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
                <Popover placement="start">
                  <Tooltip
                    hasArrow
                    label="Add reminder(s)"
                    bg="black"
                    color="white"
                    borderRadius="5"
                    placement="top-start"
                  >
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
                          icon={<BsAlarm color="gray" />}
                          variant="Flushed"
                        ></Button>
                      </PopoverTrigger>
                    </Box>
                  </Tooltip>
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
                  <Tooltip
                    hasArrow
                    label="insert from integration"
                    bg="black"
                    color="white"
                    borderRadius="5"
                    placement="top-start"
                  >
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
                      icon={<BiGitCompare color="gray" />}
                      variant="Flushed"
                    ></MenuButton>
                  </Tooltip>
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
          <Divider />
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
