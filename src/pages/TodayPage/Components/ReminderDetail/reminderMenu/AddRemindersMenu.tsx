import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import ClockIcon from "../../../../../icons/ClockIcon";

function AddRemindersMenu() {
  return (
    <Text
      display="flex"
      _hover={{ bgColor: "#eee" }}
      cursor="pointer"
      p="12px 5px"
      borderRadius="5px"
    >
      <ClockIcon color="#808080" />
      <Flex ml="10px" alignItems="center" color="#919191">
        Add reminders
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
      </Flex>
    </Text>
  );
}

export default AddRemindersMenu;
