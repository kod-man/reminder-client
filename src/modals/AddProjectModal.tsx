import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";
import SmallPlusIcon from "../icons/SmallPlusIcon";

const AddProjectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
      {/* <Flex as={Button} onClick={onOpen}> */}
      <Flex
        as={Button}
        onClick={onOpen}
        style={{
          backgroundColor: "#fafafa",
          width: "16px",
          height: "16px",
          border: "none",
          padding: "1px",
        }}
      >
        <SmallPlusIcon />
      </Flex>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            flexDirection="row"
            border="1px solid red"
            maxW="375px"
            maxH="45px"
          >
            Add Project
          </ModalHeader>
          <Flex>
            <QuestionMarkIcon color="black" />
          </Flex>

          <ModalBody>Lorem count={2}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProjectModal;
