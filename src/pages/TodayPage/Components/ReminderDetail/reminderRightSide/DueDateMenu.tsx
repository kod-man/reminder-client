import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import TodayIcon from "../../../../../icons/TodayIcon";
import DeleteIcon from "../../../../../icons/DeleteIcon";

function DueDateMenu() {
  return (
    <>
      <Text my="10px">Due date</Text>
      <Flex
        _hover={{ bgColor: "#eee" }}
        cursor="pointer"
        p="5px 10px"
        alignItems="center"
        borderRadius="5px"
        justifyContent="space-between"
      >
        <Flex alignItems="center">
          <TodayIcon color="#d1453b" />
          <Text ml="10px">24 May</Text>
        </Flex>
        <DeleteIcon />
      </Flex>
    </>
  );
}

export default DueDateMenu;
