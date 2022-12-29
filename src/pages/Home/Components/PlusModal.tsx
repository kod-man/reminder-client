import {
  Button,
  Flex,
  Input,
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
import { BsAlarm, BsFlag, BsInboxFill, BsPlus } from "react-icons/bs";
import { MdLabelOutline, MdToday } from "react-icons/md";
import ModalCard from "./ModalCard";

const dataGrayIcon = [
  {
    Icon: MdLabelOutline,
    text: "Add label(s) @",
  },
  {
    Icon: BsFlag,
    text: "Set the priority  Low(-), Medium(*), High(+)",
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
const PlusModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [disabled, setDisabled] = React.useState(true);

  const usersId = localStorage.getItem("userId");
  const [tasktitle, setTasktitle] = React.useState("");

  const onChangeTaskName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTasktitle(e.target.value);

    setDisabled(false);
  };

  const userData = [
    {
      title: tasktitle,
      priority: "", // O
      description: "", //O
      date: "", //O
      userId: usersId,
    },
  ];

  const seeData = () => {
    console.log(userData);
    console.log(tasktitle.length);
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
        size="xl"
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
              <Flex ml={14}>
                {dataGrayIcon.map((item) => (
                  <ModalCard
                    key={item.text}
                    Icon={item.Icon}
                    text={item.text}
                  />
                ))}
              </Flex>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} size="sm">
              Cancel
            </Button>
            <Button
              colorScheme="red"
              ml={2}
              size="sm"
              disabled={disabled}
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
