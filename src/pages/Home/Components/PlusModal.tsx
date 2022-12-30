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
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiGitCompare } from "react-icons/bi";
import {
  BsAlarm,
  BsFlag,
  BsFlagFill,
  BsInboxFill,
  BsPlus,
} from "react-icons/bs";
import { MdLabel, MdLabelOutline, MdToday } from "react-icons/md";

const PlusModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const usersId = localStorage.getItem("userId");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [iconColor, setIconColor] = React.useState("gray");

  const priorityHandler = () => {
    alert("done");
  };

  const dataGrayIcon = [
    {
      Icon: MdLabelOutline,
      text: "Add label(s) @",
      onclikc: priorityHandler,
    },
    {
      Icon: BsFlag,
      text: "Set the priority  Low, Medium, High",
    },
    {
      Icon: BsAlarm,
      text: "Add reminder(s)",
    },
    {
      Icon: MdToday,
      text: "insert from integration",
    },
  ];

  // const changeIconColor: String(value: string)=>{
  //   if(value === "Low"){
  //     setIconColor("yellow")
  //   }else if(value ==="Medium"){
  //     setIconColor("blue")
  //   }else if (value === "High" )
  //   setIconColor("red")
  //   else setIconColor("gray")
  // };

  const onChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value.trim());
  };
  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value.trim());
  };

  const userData = {
    title,
    priority, // O
    description, //O
    date: "", //O
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
        size="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody pb={3}>
            <Input
              placeholder="Task name"
              border="none"
              fontSize="xl"
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
              <Button color="green" size="sm">
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
                <Button color="blue" size="sm" ml={2}>
                  <BsInboxFill />
                  <Text ml={1} fontSize="xs">
                    Inbox
                  </Text>
                </Button>
              </Tooltip>
              <Flex ml="auto">
                <Menu>
                  <Tooltip
                    hasArrow
                    label="Add label(s) @"
                    bg="black"
                    color="white"
                    borderRadius="5"
                    placement="top-start"
                  >
                    <MenuButton
                      _hover={{ bg: "gray.200" }}
                      mx={1}
                      as={IconButton}
                      borderRadius={5}
                      color="white"
                      size="sm"
                      bg="#edf2f7"
                      icon={<MdLabelOutline color={iconColor} />}
                      variant="Flushed"
                    ></MenuButton>
                  </Tooltip>
                  <MenuList scale="sm">
                    <MenuItem>
                      <Flex direction="column">
                        <Box bg="white" h={8} w={20} color="white">
                          <Input
                            htmlSize={10}
                            width="auto"
                            placeholder="Type a label"
                            size="sm"
                          />
                        </Box>
                        <Divider />
                        <Flex flexDirection="row" alignItems="center">
                          <MdLabel color="gray" />
                          <Text mx={2}>read</Text>
                          <Checkbox color="gray" ml="10"></Checkbox>
                        </Flex>
                      </Flex>
                    </MenuItem>
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
                      _hover={{ bg: "gray.200" }}
                      mx={1}
                      as={IconButton}
                      borderRadius={5}
                      color="white"
                      size="sm"
                      bg="#edf2f7"
                      icon={<BsFlag color={iconColor} />}
                      variant="Flushed"
                    ></MenuButton>
                  </Tooltip>
                  <MenuList>
                    <MenuItem value="Low">
                      <BsFlagFill color="green" />
                      <Text fontSize="sm" ml={3}>
                        Priority Low
                      </Text>
                    </MenuItem>
                    <MenuItem value="Medium">
                      <BsFlagFill color="blue" />
                      <Text fontSize="sm" ml={3}>
                        Priority Medium
                      </Text>
                    </MenuItem>
                    <MenuItem value="Low">
                      <BsFlagFill color="red" />
                      <Text fontSize="sm" ml={3}>
                        Priority High
                      </Text>
                    </MenuItem>
                    <MenuItem value="High"></MenuItem>
                  </MenuList>
                </Menu>

                <Menu>
                  <Tooltip
                    hasArrow
                    label="Add reminder(s)"
                    bg="black"
                    color="white"
                    borderRadius="5"
                    placement="top-start"
                  >
                    <MenuButton
                      _hover={{ bg: "gray.200" }}
                      mx={1}
                      as={IconButton}
                      borderRadius={5}
                      color="white"
                      size="sm"
                      bg="#edf2f7"
                      icon={<BsAlarm color={iconColor} />}
                      variant="Flushed"
                    ></MenuButton>
                  </Tooltip>
                  <MenuList></MenuList>
                </Menu>

                <Menu>
                  <Tooltip
                    hasArrow
                    label=""
                    bg="black"
                    color="white"
                    borderRadius="5"
                    placement="top-start"
                  >
                    <MenuButton
                      _hover={{ bg: "gray.200" }}
                      mx={1}
                      as={IconButton}
                      borderRadius={5}
                      color="white"
                      size="sm"
                      bg="#edf2f7"
                      icon={<BiGitCompare color={iconColor} />}
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

                {/* 
                {dataGrayIcon.map((item) => (
                  <ModalCard
                    key={item.text}
                    Icon={item.Icon}
                    text={item.text}
                  />
                ))} */}
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
