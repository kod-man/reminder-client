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
  useDisclosure,
} from "@chakra-ui/react";
import { BiGitCompare } from "react-icons/bi";
import { BsAlarm, BsFlag, BsInboxFill, BsPlus } from "react-icons/bs";
import { MdLabelOutline, MdToday } from "react-icons/md";

const dataModalLeft = [
  {
    Icon: BiGitCompare,
    text: "Today",
  },
  {
    Icon: BsInboxFill,
    text: "Inbox",
  },
];
const dataModaRight = [
  {
    Icon: MdLabelOutline,
  },
  {
    Icon: BsFlag,
  },
  {
    Icon: BsAlarm,
  },
  {
    Icon: MdToday,
  },
];
const PlusModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <BsPlus color="white" size="23px" />
      </Flex>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody pb={3}>
            <Input
              placeholder="Task name"
              border="none"
              fontSize="xl"
              fontFamily="initial"
              textColor="#2b2b2b"
              variant="unstyled"
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
              <Button color="blue" size="sm" ml={2}>
                <BsInboxFill />
                <Text ml={1} fontSize="xs">
                  Inbox
                </Text>
              </Button>
              <Flex ml={14}>
                <Button color="gray" size="sm" ml={2}>
                  <MdLabelOutline />
                </Button>
                <Button color="gray" size="sm" ml={2}>
                  <BsFlag />
                </Button>
                <Button color="gray" size="sm" ml={2}>
                  <BsAlarm />
                </Button>
                <Button color="gray" size="sm" ml={2}>
                  <BiGitCompare />
                </Button>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} size="sm">
              Cancel
            </Button>
            <Button colorScheme="red" ml={2} size="sm" disabled>
              Add task
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlusModal;
