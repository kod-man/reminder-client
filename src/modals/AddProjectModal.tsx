import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ColorDotIcon from "../icons/ColorDotIcon";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";
import SmallPlusIcon from "../icons/SmallPlusIcon";

const AddProjectModal = () => {
  const colors = [
    "Berry Red",
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Light Blue",
    "Teal",
    "Purple",
    "Gray",
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  return (
    <>
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
        <ModalContent w="450px" h="275px">
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            h="32px"
          >
            <Box
              width="100%"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              <ModalHeader>Add Project</ModalHeader>
            </Box>

            <Flex as="button" border="none" mr="10px">
              <QuestionMarkIcon color="black" />
            </Flex>
          </Flex>
          <Divider mt="10px" />
          <ModalBody>
            <Flex flexDir="column">
              <Text fontWeight="bold" mb="4px">
                Name
              </Text>
              <Input size="sm" />
            </Flex>

            <Flex flexDir="column">
              <Text fontWeight="bold" mb="4px">
                Color
              </Text>
              <Select size="sm">
                {colors.map((color) => (
                  <option key={color} value={color}>
                    <ColorDotIcon color={color} /> {color}
                  </option>
                ))}
              </Select>
            </Flex>
            <Flex alignItems="center" mt="10px">
              <FormControl display="flex" alignItems="center">
                <Switch colorScheme="gray" />
                <Text ml="10px">Add to favorites</Text>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              mr={3}
              onClick={onClose}
              width="70px"
              height="35px"
            >
              Cancel
            </Button>

            <Button
              variant="ghost"
              backgroundColor="#f1b7b2"
              style={{ cursor: "not-allowed", backgroundColor: "#f1b7b2" }}
              width="70px"
              height="35px"
              textColor="white"
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddProjectModal;
