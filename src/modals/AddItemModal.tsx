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
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CustomSelects from "../components/CustomSelects";
import MyTooltip from "../components/Navbar/Components/MyTooltip";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";
import { refreshPage } from "../store/Refresh/RefreshSlice";
import { Axios } from "../utils/axios";
import { defaultToastProps, genericErrorToast } from "../utils/genericToast";
import { PATHS } from "../utils/paths";
import { API } from "../utils/usedApi";

type AddItemModalProps = {
  tooltipLabel: string;
  ModalOpenComponent: React.ElementType;
  action: string;
  name?: string;
  color?: string;
  isFavorite?: boolean;
  id?: string;
};

const AddItemModal: FC<AddItemModalProps> = ({
  tooltipLabel,
  ModalOpenComponent,
  action,
  name,
  color,
  isFavorite,
  id
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const toast = useToast();
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState({
    name: name,
    color: action === "Edit" ? color : "gray",
    userId: sessionStorage.getItem("userId"),
    isFavorite: action === "Edit" ? isFavorite : false
  });

  const navigate = useNavigate();

  const onColorChangeHandler = (e: any) => {
    setItemData((prev) => ({ ...prev, color: e.value.toLowerCase() }));
  };

  const onToggleHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setItemData((prev) => ({ ...prev, isFavorite: e.currentTarget.checked }));
  };

  const customAPI =
    tooltipLabel === "Filters"
      ? API.addFilter
      : tooltipLabel === "Labels"
      ? API.addLabel
      : tooltipLabel === "Projects"
      ? API.addProject
      : "";
  const title = tooltipLabel.slice(0, -1);

  const submitHandler = () => {
    if (itemData.name) {
      if (action === "Edit") {
        Axios.put(API.updateLabel + "/" + id, itemData);
      } else {
        Axios.post(customAPI, { ...itemData, name: itemData.name })
          .then((res) => {
            toast({
              ...defaultToastProps,
              title: `${title} added successfully.`,
              status: "success"
            });

            if (tooltipLabel === "Labels") {
              navigate(PATHS.FILTERS_AND_LABELS + "/" + res.data.labelId);
            }
          })
          .catch((err) => {
            genericErrorToast(err, toast);
          });
        setItemData({
          name: "",
          color: "",
          userId: sessionStorage.getItem("userId"),
          isFavorite: false
        });
      }
      onClose();
      dispatch(refreshPage(tooltipLabel));
    } else {
      toast({
        ...defaultToastProps,
        title: "Name is required",
        status: "error"
      });
    }
  };
  return (
    <>
      <MyTooltip label={`${action} ${title.toLowerCase()}`}>
        <Flex
          onClick={(e) => {
            e.stopPropagation(), onOpen();
          }}
        >
          <ModalOpenComponent />
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
            <Text>
              {action} {title.toLowerCase()}
            </Text>
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
                onChange={(e) =>
                  setItemData({ ...itemData, name: e.target.value })
                }
                borderRadius="7px"
                border="1px"
                borderColor="gray"
                outline="none"
                value={itemData.name}
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
              <CustomSelects
                onChange={onColorChangeHandler}
                color={itemData.color}
              />
            </Flex>
            <Flex alignItems="center" mt="15px">
              <Switch
                colorScheme="teal"
                onChange={onToggleHandler}
                defaultChecked={itemData.isFavorite}
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
              onClick={submitHandler}
              variant="ghost"
              backgroundColor="red.500"
              width="70px"
              height="35px"
              textColor="white"
              _hover={{ backgroundColor: "red.700" }}
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
