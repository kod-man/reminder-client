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
  Text,
  Tooltip
} from "@chakra-ui/react";
import FlagIcon from "../../../../icons/FlagIcon";
import InboxIcon from "../../../../icons/InboxIcon";
import LockIcon from "../../../../icons/LockIcon";
import TodayIcon from "../../../../icons/TodayIcon";
import ReminderDetailHeader from "./ReminderDetailHeader";
import ToggleIcon from "../../../../icons/ToggleIcon";
import DeleteIcon from "../../../../icons/DeleteIcon";

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
        <ModalContent height="95vh" my="30px">
          <ModalHeader>
            <ReminderDetailHeader />
          </ModalHeader>
          <Divider />
          <ModalCloseButton mt="5px" />
          <ModalBody p="0 0 0 20px ">
            <Flex height="100%">
              <Box flex="7" pt="25px">
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
                <Flex flexDirection="column" ml="40px" mr="20px" mt="40px">
                  <Flex
                    mb="10px"
                    color="#666"
                    fontSize="13px"
                    fontWeight="500"
                    _hover={{ backgroundColor: "#eee", color: "black" }}
                    cursor="pointer"
                    w="max-content"
                    p="5px 10px"
                    borderRadius="5px"
                    alignItems="center"
                  >
                    <Text fontSize="25px" fontWeight="400">
                      +
                    </Text>
                    <Text ml="8px"> Add sub-task</Text>
                  </Flex>
                  <Divider my="10px" />
                  <Flex mt="25px" alignItems="center">
                    <Flex
                      border="1px solid gray"
                      borderRadius="50%"
                      h="35px"
                      w="35px"
                      justifyContent="center"
                      alignItems="center"
                      bgColor="green.800"
                      color="white"
                    >
                      h
                    </Flex>
                    <Input
                      placeholder="Comment"
                      ml="20px"
                      borderRightRadius="full"
                      borderLeftRadius="full"
                      h="35px"
                      fontSize="13px"
                      cursor="pointer"
                      _hover={{
                        bgColor: "#fafafa",
                        border: "1px solid #999",
                        _placeholder: { color: "black" }
                      }}
                    />
                  </Flex>
                </Flex>
              </Box>
              <Box
                bg="#fafafa"
                flex="3"
                height="100%"
                px="30px"
                fontSize="12px"
              >
                <Text mt="15px">Project</Text>
                <Tooltip label="Move to..." placement="top">
                  <Flex
                    alignItems="center"
                    my="12px"
                    _hover={{ bgColor: "#eee" }}
                    cursor="pointer"
                    p="5px 10px"
                    borderRadius="5px"
                    justifyContent="space-between"
                  >
                    <Flex>
                      <InboxIcon fontSize="sm" color="#246fe0" />
                      <Text ml="7px" fontWeight="400">
                        Inbox
                      </Text>
                    </Flex>

                    <ToggleIcon width="15" height="15" color="black" />
                  </Flex>
                </Tooltip>
                <Divider my="12px" />
                <Text my="12px">Due date</Text>
                <Flex
                  _hover={{ bgColor: "#eee" }}
                  cursor="pointer"
                  p="5px 10px"
                  alignItems="center"
                  borderRadius="5px"
                  justifyContent="space-between"
                >
                  <Flex alignItems="center">
                    <TodayIcon color="#d1453b" /> <Text ml="10px">24 May</Text>
                  </Flex>
                  <DeleteIcon />
                </Flex>
                <Divider my="12px" />
                <Text>Priority</Text>
                <Tooltip label="Set prioroty..." placement="top">
                  <Flex
                    alignItems="center"
                    mt="15px"
                    _hover={{ bgColor: "#eee" }}
                    cursor="pointer"
                    p="5px 10px"
                    borderRadius="5px"
                    justifyContent="space-between"
                  >
                    <Flex>
                      <FlagIcon /> <Text ml="10px">P4</Text>
                    </Flex>

                    <ToggleIcon width="15" height="15" color="black" />
                  </Flex>
                </Tooltip>
                <Divider mt="12px" />
                <Tooltip label="Change labels" placement="top">
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    my="7px"
                    px="10px"
                    _hover={{ bgColor: "#eee" }}
                    cursor="pointer"
                    borderRadius="5px"
                  >
                    <Text>Labels</Text>
                    <Text fontSize="20px" color="#b2b2b2" fontWeight="400">
                      +
                    </Text>
                  </Flex>
                </Tooltip>
                <Divider mb="12px" />
                <Text
                  display="flex"
                  justifyContent="space-between"
                  _hover={{ bgColor: "#eee" }}
                  cursor="pointer"
                  p="5px 10px"
                  borderRadius="5px"
                >
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
                      fontWeight="700"
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
