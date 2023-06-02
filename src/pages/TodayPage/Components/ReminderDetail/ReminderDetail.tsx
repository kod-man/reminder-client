import {
  Box,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useMediaQuery
} from "@chakra-ui/react";

import ReminderDetailHeader from "./ReminderDetailHeader";
import ReminderMenu from "./reminderMenu/ReminderMenu";
import ReminderDetailRightSide from "./reminderRightSide/ReminderDetailRightSide";
import AddSubTask from "./AddSubTask";
import CommentMenu from "./CommentMenu";

type EDIT_PROPS = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
};
function ReminderDetail({ isOpen, onClose, title, description }: EDIT_PROPS) {
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <Flex>
        <ModalContent height="95vh" my="30px">
          <ModalHeader>
            <ReminderDetailHeader />
          </ModalHeader>
          <Divider />
          <ModalCloseButton mt="5px" />
          <ModalBody p="0 0 0 20px ">
            <Flex height="100%">
              <Box flex="7" pt="20px">
                <Flex>
                  <Box
                    border="1px solid gray"
                    borderRadius="50%"
                    h="20px"
                    w="20px"
                    mt="1"
                  />
                  <Box ml="20px">
                    <Text fontWeight="500">{title}</Text>
                    <Text mt="10px"> {description}</Text>
                  </Box>
                </Flex>
                <Flex
                  flexDirection="column"
                  ml={isLargerThan750 ? "40px" : "20px"}
                  mr="20px"
                  mt="30px"
                >
                  {!isLargerThan750 && <ReminderMenu />}
                  <AddSubTask />
                  <Divider
                    my="10px"
                    borderWidth={isLargerThan750 ? "" : "3px"}
                  />
                  <CommentMenu />
                </Flex>
              </Box>
              {isLargerThan750 && <ReminderDetailRightSide />}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Flex>
    </Modal>
  );
}

export default ReminderDetail;
