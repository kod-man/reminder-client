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
    "berry red",
    "Red",
    "orange",
    "yellow",
    "green",
    "blue",
    "light blue",
    "teal",
    "purple",
    "gray",
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
              <Select>
                {colors.map((color) => (
                  <option key={color} value={color}>
                    <Flex>
                      <ColorDotIcon color={color} />

                      <Text color={"red.100"} colorScheme={color}>
                        {color}
                      </Text>
                    </Flex>
                  </option>
                ))}
              </Select>

              {/* <Select bg="black" color="white">
  <option style={{ color: 'black' }} value="option1">
    Option1
  </option>
  <option style={{ color: 'red' }} value="option2">
    Option2
  </option>
</Select> */}
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
