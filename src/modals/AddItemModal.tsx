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
  useDisclosure
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import CustomSelects from "../components/CustomSelects";
import MyTooltip from "../components/Navbar/Components/MyTooltip";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";
import SmallPlusIcon from "../icons/SmallPlusIcon";

type AddItemModalProps = {
  tooltipLabel: string;
};

const AddItemModal: FC<AddItemModalProps> = ({ tooltipLabel }) => {
  const [nameValue, setNameValue] = useState<string>("");
  const [colorValue, setColorValue] = useState<string>("gray");
  const [addToFavorites, setAddToFavorites] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const onInputChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setNameValue(e.currentTarget.value);
  };
  const onColorChangeHandler = (e: any) => {
    setColorValue(e.value);
  };

  const onToggleHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setAddToFavorites(e.currentTarget.checked);
  };

  const submitHandler = () => {
    console.log(nameValue, colorValue, addToFavorites);
  };
  return (
    <>
      <MyTooltip label={`Add ${tooltipLabel.toLowerCase()}`}>
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
            <Text> Add {tooltipLabel}</Text>
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
                onChange={onInputChangeHandler}
                _focus={{
                  borderColor: "gray",
                  boxShadow: "none",
                  outline: "none"
                }}
              />
            </Flex>
            <Flex flexDir="column" mt="12px">
              <Text fontWeight="bold" m="8px 0 5px 0" fontSize="14px">
                Color
              </Text>
              <CustomSelects onChange={onColorChangeHandler} />
            </Flex>
            <Flex alignItems="center" mt="15px">
              <Switch colorScheme="teal" onChange={onToggleHandler} />
              <Text ml="10px" fontSize="14px">
                Add to favorites
              </Text>
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
              onClick={submitHandler}
              variant="ghost"
              backgroundColor="#f1b7b2"
              width="70px"
              height="35px"
              textColor="white"
              isDisabled={nameValue.trim() === ""}
              _hover={{ backgroundColor: "#c0392b!important" }}
              style={
                nameValue.trim() === ""
                  ? {
                      cursor: "not-allowed",
                      backgroundColor: "#f1b7b2",
                      opacity: 0.5
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

export default AddItemModal;
