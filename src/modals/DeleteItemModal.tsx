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
import { useDispatch } from "react-redux";
import MyTooltip from "../components/Navbar/Components/MyTooltip";
import ExclamationMarkIcon from "../icons/ExclamationMarkIcon";
import TrashIcon from "../icons/TrashIcon";
import { refreshPage } from "../store/Refresh/RefreshSlice";
import { Axios } from "../utils/axios";
import { defaultToastProps, genericErrorToast } from "../utils/genericToast";
import { API } from "../utils/usedApi";

type DeleteItemModalProps = {
  tooltipLabel: string;
  text: string;
  id: string;
};

const DeleteItemModal: FC<DeleteItemModalProps> = ({
  tooltipLabel,
  text,
  id
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const toast = useToast();
  const dispatch = useDispatch();

  const customAPI =
    tooltipLabel === "Filters"
      ? API.deleteFilter
      : tooltipLabel === "Labels"
      ? API.deleteLabel
      : tooltipLabel === "Projects"
      ? API.deleteProject
      : "";
  const title = tooltipLabel.slice(0, -1);
  const submitHandler = () => {
    Axios.delete(`${customAPI}/${id}`)
      .then(() => {
        toast({
          ...defaultToastProps,
          title: `${title} deleted successfully.`,
          status: "success"
        });
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });
    onClose();
    dispatch(refreshPage(tooltipLabel));
  };
  return (
    <>
      <MyTooltip label={`Delete ${title.toLowerCase()}`}>
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
          <ModalHeader marginLeft="-4px" fontWeight="bold" fontSize="20px">
            <Flex
              top="1px"
              right="2px"
              as="button"
              border="none"
              m="10px 10px 0 0"
            >
              <ExclamationMarkIcon color="black" />
            </Flex>
          </ModalHeader>

          <ModalBody>
            <Text>
              Are you sure you want to delete <strong>{text}</strong> ?
            </Text>
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
