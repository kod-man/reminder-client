/* eslint-disable no-console */
import { Flex, Spacer, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { RefObject, useRef } from "react";
import { useDispatch } from "react-redux";

import TreeDoteIcon from "../../../icons/TreeDoteIcon";
import ConfirmModal from "../../../modals/ConfirmModal";
import { refreshTodos } from "../../../store/Reminder/ReminderSlice";
import { Axios } from "../../../utils/axios";
import {
  defaultToastProps,
  genericErrorToast
} from "../../../utils/genericToast";
import { API } from "../../../utils/usedApi";

import IconsBar from "./IconsBar";
import ReminderDetail from "./ReminderDetail/ReminderDetail";

type ReminderCardProps = {
  title: string;
  description: string;
  id: string;
};

function ReminderCard({ title, description, id }: ReminderCardProps) {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const cancelRef = useRef() as RefObject<HTMLButtonElement>;
  const toast = useToast();
  const dispatch = useDispatch();

  const deleteHandler = (e: any) => {
    e.preventDefault();
    Axios.delete(API.deleteReminder + "/" + id)
      .then(() => {
        toast({
          ...defaultToastProps,
          title: "Reminder removed succesfully.",
          status: "success"
        });
        dispatch(refreshTodos());
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });
  };

  return (
    <Flex
      borderBottom="1px solid"
      borderColor="gray.200"
      w="100%"
      justifyContent="center"
      mb="4"
      cursor="pointer"
    >
      <Flex w="100%" h="50px">
        <Flex>
          <Flex
            onClick={modal2.onOpen}
            border="1px solid gray"
            borderRadius="50%"
            h="20px"
            w="20px"
            mt="1"
          />

          <Flex ml="2" direction="column" onClick={modal1.onOpen}>
            <Text variant="unstyled" onChange={() => console.log("fix here")}>
              {title}
            </Text>
            <Text
              variant="unstyled"
              color="gray"
              fontSize="xs"
              onChange={() => console.log("fix here")}
            >
              {description}
            </Text>
          </Flex>
        </Flex>
        <Spacer onClick={modal1.onOpen} />
        <IconsBar />
      </Flex>
      <Flex
        w="24px"
        h="24px"
        _hover={{ bg: "gray.200" }}
        alignItems="center"
        justifyContent="center"
        ml="2"
      >
        <TreeDoteIcon color="gray" />
      </Flex>

      <ConfirmModal
        isOpen={modal2.isOpen}
        onClose={modal2.onClose}
        cancelRef={cancelRef}
        header="Are you sure?"
        body="Are you sure you want to delete this reminder? You can't undo this"
        handlerFunction={deleteHandler}
        confirmButton="Yes"
        cancelButton="No"
      />
      <ReminderDetail
        isOpen={modal1.isOpen}
        onClose={modal1.onClose}
        title={title}
        description={description}
      />
    </Flex>
  );
}

export default ReminderCard;
