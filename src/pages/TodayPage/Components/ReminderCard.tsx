import {
  Flex,
  Input,
  Spacer,
  useDisclosure,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { RefObject, useRef } from "react";

import TreeDoteIcon from "../../../icons/TreeDoteIcon";
import ConfirmModal from "../../../modals/ConfirmModal";
import { Axios } from "../../../utils/axios";
import {
  defaultToastProps,
  genericErrorToast,
} from "../../../utils/genericToast";
import { API } from "../../../utils/usedApi";

import IconsBar from "./IconsBar";

type ReminderCardProps = {
  title: string;
  description: string;
  id: string;
  setRefreshGet: React.Dispatch<React.SetStateAction<boolean>>;
  refreshGet: Boolean;
};

function ReminderCard({
  title,
  description,
  id,
  setRefreshGet,
  refreshGet,
}: ReminderCardProps) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef() as RefObject<HTMLButtonElement>;
  const toast = useToast();
  const deleteHandler = (e: any) => {
    e.preventDefault();
    Axios.delete(API.deleteReminder + "/" + id)
      .then((res) => {
        console.log(res);
        toast({
          ...defaultToastProps,
          title: "Reminder removed succesfully.",
          status: "success",
        });
      })
      .catch((err) => {
        genericErrorToast(err, toast);
      });
    setRefreshGet(!refreshGet);
  };

  return (
    <Flex
      borderBottom='1px solid'
      borderColor='gray.200'
      w={isLargerThan800 ? "55%" : "80%"}
      justifyContent='center'
      mb='4'
    >
      <Flex w='100%' h='50px' cursor='pointer'>
        <Flex>
          <Flex
            onClick={onOpen}
            border='1px solid gray'
            borderRadius='50%'
            h='20px'
            w='20px'
            mt='1'
          />
          <Flex ml='2' direction='column'>
            <Input variant='unstyled' value={title} name='title' />
            <Input
              variant='unstyled'
              color='gray'
              value={description}
              fontSize='xs'
              name='description'
            />
          </Flex>
        </Flex>
        <Spacer />
        <IconsBar />
      </Flex>
      <Flex
        w='24px'
        h='24px'
        _hover={{ bg: "gray.200" }}
        alignItems='center'
        justifyContent='center'
        ml='2'
      >
        <TreeDoteIcon color='gray' />
      </Flex>

      <ConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        header='Are you sure?'
        body="Are you sure you want to delete this reminder? You can't undo this"
        handlerFunction={deleteHandler}
        confirmButton='Yes'
        cancelButton='No'
      />
    </Flex>
  );
}

export default ReminderCard;
