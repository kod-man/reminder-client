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
  useMediaQuery
} from "@chakra-ui/react";

import ReminderDetailHeader from "./ReminderDetailHeader";
import ReminderMenu from "./ReminderMenu";
import SmallPlusIcon from "../../../../icons/SmallPlusIcon";
import ReminderDetailRightSide from "./ReminderDetailRightSide";

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
                  <Flex
                    mb="10px"
                    color="#666"
                    fontSize="13px"
                    fontWeight="500"
                    _hover={{ backgroundColor: "#eee", color: "black" }}
                    cursor="pointer"
                    p="5px 10px"
                    borderRadius="5px"
                    alignItems="center"
                  >
                    <SmallPlusIcon color="gray.800" />
                    <Text display="inline" ml="8px">
                      Add sub-task
                    </Text>
                  </Flex>
                  <Divider
                    my="10px"
                    borderWidth={isLargerThan750 ? "" : "3px"}
                  />
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
              {isLargerThan750 && <ReminderDetailRightSide />}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Flex>
    </Modal>
  );
}

export default ReminderDetail;
