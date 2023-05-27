import {
  Box,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";
import FlagIcon from "../../../../icons/FlagIcon";
import InboxIcon from "../../../../icons/InboxIcon";
import LockIcon from "../../../../icons/LockIcon";
import TodayIcon from "../../../../icons/TodayIcon";
import ReminderDetailHeader from "./ReminderDetailHeader";

type EDIT_PROPS = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
};
function ReminderDetail({ isOpen, onClose, title, description }: EDIT_PROPS) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <Flex>
        <ModalContent height="90vh" border="5px solid red">
          <ModalHeader>
            <ReminderDetailHeader />
          </ModalHeader>
          <Divider />
          <ModalCloseButton mt="5px" />
          <ModalBody p="0 0 0 20px ">
            <Flex height="100%">
              <Box w="70%" height="100%" border="1px solid blue">
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
                    <Text mt="50px" mb="10px" color="#666" fontSize="13px">
                      + Add sub-task
                    </Text>
                  </Box>
                </Flex>
                <Divider w="90%" ml="40px" my="10px" />
                <Flex ml="40px" mt="25px" alignItems="center">
                  <Flex
                    border="1px solid gray"
                    borderRadius="50%"
                    h="25px"
                    w="25px"
                    mt="1"
                    justifyContent="center"
                    alignItems="center"
                    bgColor="green.700"
                    color="white"
                  >
                    h
                  </Flex>
                  <Input
                    placeholder="Comment"
                    w="90%"
                    ml="20px"
                    borderRightRadius="full"
                    borderLeftRadius="full"
                    h="30px"
                    fontSize="13px"
                  />
                </Flex>
              </Box>
              <Box
                bg="#fafafa"
                w="30%"
                height="100%"
                border="1px solid green"
                px="30px"
                fontSize="12px"
              >
                <Text mt="15px">Project</Text>
                <Flex alignItems="center" my="12px">
                  <InboxIcon fontSize="sm" color="#246fe0" />
                  <Text ml="7px" fontWeight="400">
                    Inbox
                  </Text>
                </Flex>
                <Divider my="12px" />
                <Text my="12px">Due date</Text>
                <Text display="flex" alignItems="center">
                  <TodayIcon color="#d1453b" /> <Text ml="10px">24 May</Text>
                </Text>
                <Divider my="12px" />
                <Text>Priority</Text>
                <Text display="flex" alignItems="center" mt="15px">
                  <FlagIcon /> <Text ml="10px">P4</Text>
                </Text>
                <Divider mt="12px" />
                <Text
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb="5px"
                >
                  Labels
                  <Text fontSize="30px" color="#b2b2b2" fontWeight="400">
                    +
                  </Text>
                </Text>
                <Divider mb="12px" />
                <Text display="flex" justifyContent="space-between">
                  <Text display="flex" alignItems="center">
                    Reminders
                    <Text
                      bgColor="#faead1"
                      color="#8f4700"
                      ml="2px"
                      w="30px"
                      h="17px"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="3px"
                      fontSize="11px"
                      fontWeight="500"
                    >
                      PRO
                    </Text>
                  </Text>
                  <LockIcon color="#666" />
                </Text>
                <Divider my="12px" />
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Flex>
    </Modal>
  );
}

export default ReminderDetail;
