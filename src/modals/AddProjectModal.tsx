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
  useToast
} from "@chakra-ui/react";
import React, { useRef } from "react";
import CustomSelects from "../components/CustomSelects";
import MyTooltip from "../components/Navbar/Components/MyTooltip";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";
import SmallPlusIcon from "../icons/SmallPlusIcon";
import { Axios } from "../utils/axios";
import { defaultToastProps, genericErrorToast } from "../utils/genericToast";
import { API } from "../utils/usedApi";

const AddProjectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const nameRef = useRef<HTMLInputElement>(null);

  const [color, setColor] = React.useState("gray");
  const [isFavorite, setIsFavorite] = React.useState(false);
  const toast = useToast();

  const handleColorChange = (event: any) => {
    setColor(event.target.value);
  };

  const ProjectData = {
    nameRef,
    color,
    userId: sessionStorage.getItem("userId"),
    isFavorite
  };

  const submitHandler = () => {
    if (!nameRef.current?.value) {
      toast({
        title: "Name is required.",
        status: "error"
      });
      return;
    }
    Axios.post(API.addProject, ProjectData)
      .then(() => {
        toast({
          ...defaultToastProps,
          title: "Project added successfully.",
          status: "success"
        });
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });
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
            <Text>Add project</Text>
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
                ref={nameRef}
                borderRadius="7px"
                border="1px"
                borderColor="gray"
                outline="none"
                _focus={{
                  borderColor: "gray",
                  boxShadow: "none",
                  outline: "none"
                }}
                value={nameRef.current?.value}
                onChange={(event) => {
                  nameRef.current!.value = event.target.value;
                }}
              />
            </Flex>
            <Flex flexDirection="column" mt="12px">
              <Text fontWeight="bold" m="8px 0 5px 0" fontSize="14px">
                Color
              </Text>
              <CustomSelects
                color={color}
                handleColorChange={handleColorChange}
              />
            </Flex>
            <Flex alignItems="center" mt="15px">
              <Switch
                colorScheme="teal"
                isChecked={isFavorite}
                onChange={() => setIsFavorite(!isFavorite)}
              />
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
              variant="ghost"
              backgroundColor="#f1b7b2"
              width="70px"
              height="35px"
              textColor="white"
              disabled={nameRef.current?.value.trim() === ""}
              onClick={submitHandler}
              _hover={{ backgroundColor: "#c0392b!important" }}
              style={
                nameRef.current?.value.trim() === ""
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

export default AddProjectModal;
