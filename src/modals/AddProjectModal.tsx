import {
  Button,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Switch,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import CustomSelects from "../components/Navbar/Components/CustomSelects";
import MyTooltip from "../components/Navbar/Components/MyTooltip";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";
import SmallPlusIcon from "../icons/SmallPlusIcon";

const AddProjectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const [name, setName] = React.useState("");
  const isNameEmpty = name.trim() === "";

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (!isNameEmpty) {
      // make post request with name, color, userId, isFavorite data
      onClose();
      // show success toast message to user
    }
  };

  return (
    <>
      <MyTooltip label="Add project">
        <Flex>
          <SmallPlusIcon onClick={onOpen} />
        </Flex>
      </MyTooltip>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="md"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader position="relative" fontWeight="bold" fontSize="20px">
            <Text> Add project</Text>
            <Flex
              position="absolute"
              top="1px"
              right="2px"
              as="button"
              border="none"
              m="10px 10px 0 0"
            >
              <QuestionMarkIcon color="black" />
            </Flex>
          </ModalHeader>

          <Divider />
          <ModalBody>
            <Flex flexDir="column">
              <Text fontWeight="bold" m="8px 0 5px 0" fontSize="14px">
                Name
              </Text>
              <Input
                borderRadius="7px"
                border="1px"
                borderColor="gray"
                outline="none"
                _focus={{
                  borderColor: "gray",
                  boxShadow: "none",
                  outline: "none",
                }}
                value={name}
                onChange={handleNameChange}
              />
            </Flex>
            <Flex flexDir="column" mt="12px">
              <Text fontWeight="bold" m="8px 0 5px 0" fontSize="14px">
                Color
              </Text>
              <CustomSelects />
            </Flex>
            <Flex alignItems="center" mt="15px">
              <Flex justifyContent="center" alignItems="center">
                <Switch colorScheme="teal" />
                <Text ml="10px" fontSize="14px">
                  Add to favorites
                </Text>
              </Flex>
            </Flex>
          </ModalBody>
          <Divider mt="5px" />
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
              width="70px"
              height="35px"
              textColor="white"
              disabled={isNameEmpty}
              onClick={handleAddButtonClick}
              _hover={{ backgroundColor: "#c0392b!important" }}
              style={
                isNameEmpty
                  ? {
                      cursor: "not-allowed",
                      backgroundColor: "#f1b7b2",
                      opacity: 0.5,
                    }
                  : { backgroundColor: "#e74c3c" }
              }
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
