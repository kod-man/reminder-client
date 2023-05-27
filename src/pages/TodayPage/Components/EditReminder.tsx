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
import React from "react";
import InboxIcon from "../../../icons/InboxIcon";
import ToggleIcon from "../../../icons/ToggleIcon";
import ThreeCircleIcon from "../../../icons/ThreeCircleIcon";
import TodayIcon from "../../../icons/TodayIcon";
import FlagIcon from "../../../icons/FlagIcon";
import KeyIcon from "../../../icons/KeyIcon";

type EDIT_PROPS = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
};
function EditReminder({ isOpen, onClose, title, description }: EDIT_PROPS) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="4xl">
      <ModalOverlay />
      <ModalContent h="95vh" mt="8">
        <ModalHeader pb="0">
          <Flex justifyContent="space-between">
            <Flex alignItems="center">
              <InboxIcon fontSize="sm" color="#246fe0" />
              <Text ml="7px" fontSize="12px" fontWeight="400">
                Inbox
              </Text>
            </Flex>

            <Flex alignItems="center" mr="30px" gap="10px">
              <Box transform="rotate(180deg)">
                <ToggleIcon width="25" height="25" color="#666" />
              </Box>
              <ToggleIcon width="25" height="25" color="#b2b2b2" />
              <ThreeCircleIcon color="#666" />
            </Flex>
          </Flex>
          <Divider mt="15px" />
        </ModalHeader>
        <ModalCloseButton mt="5px" />
        <ModalBody p="0 0 0 20px ">
          <Flex>
            <Box w="70%" mt="15px">
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
              <Box ml="40px" mt="25px" display="flex" alignItems="center">
                <Box
                  border="1px solid gray"
                  borderRadius="50%"
                  h="25px"
                  w="25px"
                  mt="1"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bgColor="green.700"
                  color="white"
                >
                  h
                </Box>
                <Input
                  placeholder="Comment"
                  w="90%"
                  ml="20px"
                  borderRightRadius="full"
                  borderLeftRadius="full"
                  h="30px"
                  fontSize="13px"
                />
              </Box>
            </Box>
            <Box bg="#fafafa" w="30%" h="90.5vh" px="30px" fontSize="12px">
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
                <KeyIcon color="#666" />
              </Text>
              <Divider my="12px" />
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default EditReminder;
