import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";

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
          <ModalBody pb={6}>
          <Input  placeholder='Task name' overflow="hidden"  border="none" fontSize="large" fontFamily="heading" />
          <Input  placeholder='Description' overflow="hidden"  border="none" fontSize="small" />
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} size="sm">Cancel</Button>
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
