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

  const [isChecked, setIsChecked] = React.useState(false);

  return (
    <>
      <MyTooltip label="Add project">
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
          _hover={{ backgroundColor: "transparent", cursor: "pointer" }}
        >
          <SmallPlusIcon />
        </Flex>
      </MyTooltip>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="450px" h="330px">
          <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            h="30px"
          >
            <Box
              width="100%"
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              <ModalHeader fontWeight="bold" mt="10px" fontSize="20px">
                Add project
              </ModalHeader>
            </Box>
            <Flex as="button" border="none" m="10px 10px 0 0">
              <QuestionMarkIcon color="black" />
            </Flex>
          </Flex>
          <Divider mt="10px" />
          <ModalBody>
            <Flex flexDir="column">
              <Text fontWeight="bold" m="8px 0 5px 0" fontSize="14px">
                Name
              </Text>
              <Input
                h="32px"
                size="sm"
                borderRadius="7px"
                border="1px"
                borderColor="gray"
                outline="none"
                _focus={{
                  borderColor: "gray",
                  boxShadow: "none",
                  outline: "none",
                }}
                _hover={{
                  borderColor: "gray",
                  boxShadow: "none",
                  outline: "none",
                }}
              />
            </Flex>
            <Flex flexDir="column" mt="12px">
              <Text fontWeight="bold" m="8px 0 5px 0" fontSize="14px">
                Color
              </Text>
              <CustomSelects />
            </Flex>
            <Flex alignItems="center" mt="10px">
              <FormControl display="flex" alignItems="center">
                <Flex justifyContent="center" alignItems="center">
                  <Switch
                    colorScheme={isChecked ? "green" : "gray"}
                    m="10px 0 5px 0"
                    isChecked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <Text ml="10px" fontSize="14px">
                    Add to favorites
                  </Text>
                </Flex>
              </FormControl>
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
