import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Select,
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
  const usersId = localStorage.getItem("userId");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priority,setPriority]= React.useState("")
  const [iconColor,setIconColor]= React.useState("gray")

const changeIconColor: String(value: string)=>{
  if(value === "Low"){
    setIconColor("yellow")
  }else if(value ==="Medium"){
    setIconColor("blue")
  }else if (value === "High" )
  setIconColor("red")
  else setIconColor("gray")
};

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
                <Tooltip
                  hasArrow
                  label="Set the priority  Low, Medium, High"
                  bg="black"
                  color="white"
                  borderRadius="5"
                  placement="top-start"
                >
                  <Select
                  borderRadius={5}
                  onChange={(e)=> setPriority(e.target.value)}
                    color="gray"
                    size="sm"
                    bg="#edf2f7"  
                    icon={<BsFlag  color={iconColor} />}
                    variant="Flushed"
                  >
                    <option value="Low"><BsFlag color="yellow" /></option>
                    <option value="Medium"><BsFlag color="blue" /></option>
                    <option value="High"><BsFlag color="red" /> </option>
                  </Select>
                </Tooltip>
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
