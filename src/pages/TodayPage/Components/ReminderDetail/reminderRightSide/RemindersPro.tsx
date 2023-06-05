import { Text } from "@chakra-ui/react";
import React from "react";
import LockIcon from "../../../../../icons/LockIcon";

function RemindersPro() {
  return (
    <>
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
    </>
  );
}

export default RemindersPro;
