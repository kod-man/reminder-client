import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import React, { FC } from "react";
import MyTooltip from "../components/Navbar/Components/MyTooltip";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";
import TrashIcon from "../icons/TrashIcon";
import { Axios } from "../utils/axios";
import { defaultToastProps, genericErrorToast } from "../utils/genericToast";
import { API } from "../utils/usedApi";

type DeleteItemModalProps = {
  tooltipLabel: string;
  onRefresh: () => void;
  text: string;
  id: string;
};

const DeleteItemModal: FC<DeleteItemModalProps> = ({
  tooltipLabel,
  onRefresh,
  text,
  id
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const toast = useToast();

  const customAPI =
    tooltipLabel === "Filters"
      ? API.deleteFilter
      : tooltipLabel === "Labels"
      ? API.deleteLabel
      : tooltipLabel === "Project"
      ? API.deleteProject
      : "";

  const submitHandler = () => {
    Axios.delete(`${customAPI}/${id}`)
      .then(() => {
        toast({
          ...defaultToastProps,
          title: `${tooltipLabel} deleted successfully.`,
          status: "success"
        });
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });
    onClose();
    onRefresh();
  };
  return (
    <>
      <MyTooltip label={`Delete ${tooltipLabel.toLowerCase()}`}>
        <Flex>
          <TrashIcon onClick={onOpen} />
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
            <Text> Delete {tooltipLabel}</Text>
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

          <ModalBody>
            <Text>{`Are you sure you want to delete ${text}?`}</Text>
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
              onClick={submitHandler}
              backgroundColor="#e74c3c"
              width="70px"
              height="35px"
              textColor="white"
              _hover={{ backgroundColor: "#c0392b!important" }}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteItemModal;
