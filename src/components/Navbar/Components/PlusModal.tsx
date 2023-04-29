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
  VStack
} from "@chakra-ui/react";
import React, { useRef } from "react";
import ClockIcon from "../../../icons/ClockIcon";
import CompareIcon from "../../../icons/CompareIcon";
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
    color: "gray"
  },
  { text: "Medium", color: "green" },
  { text: "High", color: "red" }
];

const PlusModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userId = sessionStorage.getItem("userId");
  const descriptionRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const [priority, setPriority] = React.useState("Low");
  const [iconColor, setIconColor] = React.useState(prioData[0].color);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedPrio, setSelectedPrio] = React.useState(prioData[0]);

  const userData = {
    title: "",
    priority,
    description: "",
    date: "",
    userId
  };
  const showData = () => {
    // eslint-disable-next-line no-console
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
              ref={titleRef}
              placeholder="Task name"
              border="none"
              fontSize="20"
              fontFamily="inherit"
              textColor="#2b2b2b"
              variant="unstyled"
            />
            <Input
              ref={descriptionRef}
              placeholder="Description"
              border="none"
              fontSize="small"
              variant="unstyled"
            />
            <Flex mt={5}>
              <Button
                display="flex"
                boxSizing="border-box"
                justifyContent="space-between"
                alignItems="center"
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
                  alignItems="center"
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
                    />
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
                        <Checkbox color="gray" ml="10" />
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
                        key={prio.text}
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
                        />
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
                        mb={2}
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
                    />
                  </MyTooltip>
                  <MenuList>
                    <Flex>
                      <Box mx="2">
                        <CompareIcon color="gray" />
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
          <Divider border="1" />
          <ModalFooter>
            <Button onClick={onClose} size="sm">
              Cancel
            </Button>
            <Button
              colorScheme="red"
              ml={2}
              size="sm"
              isDisabled={!titleRef.current?.value.trim()}
              onClick={showData}
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
