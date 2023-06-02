import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import TodayIcon from "../../../../../icons/TodayIcon";
import DeleteIcon from "../../../../../icons/DeleteIcon";

function DateMenu() {
  return (
    <Flex
      _hover={{ bgColor: "#eee" }}
      cursor="pointer"
      p="12px 5px"
      alignItems="center"
      borderRadius="5px"
      justifyContent="space-between"
    >
      <Flex alignItems="center">
        <TodayIcon width="20" height="20" color="#dd746c" />{" "}
        <Text ml="12px">24 May</Text>
      </Flex>
      <DeleteIcon />
    </Flex>
  );
}

export default DateMenu;
